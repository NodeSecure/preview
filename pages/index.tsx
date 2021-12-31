import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Title from "../components/Title";
import { getKey } from "../utils/ScannerStorage";

/**
 * TODO: road to the V1
 * - split component and add tests
 * - create ScannerStorage
 * - i18n
 * - add types into API
 * - add prettier
 */

const Home: NextPage = () => {
  const [pkgName, setPkgName] = useState("");
  const [scanPayload, setScanPayload] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleScan = async () => {
    setLoading(true);

    let analysis;
    let maybeCached = window.localStorage.getItem(getKey(pkgName));

    if (maybeCached) {
      analysis = JSON.parse(maybeCached);
    } else {
      const res = await fetch(`/api/scanner/${pkgName.replace("/", "%2F")}`);

      if (res.ok) {
        analysis = await res.json();

        window.localStorage.setItem(getKey(pkgName), JSON.stringify(analysis));
      } else {
        console.log({ status: res.status });
      }
    }

    if (analysis) {
      setScanPayload(analysis);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scanPayload) {
      router.push(`scan/${pkgName.replace("/", "%2F")}`);
    }
  }, [scanPayload, router, pkgName]);

  return (
    <Layout>
      <div className="p-10 flex flex-col items-center">
        <Head>
          <title>Scanner for node packages.</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Title />
        <div className="flex items-center flex-col gap-6 md:gap-0 md:flex-row">
          <input
            id="search"
            value={pkgName}
            onChange={({ target: { value } }) => {
              setPkgName(value);
            }}
            className="md:h-14 px-8 py-2 md:mr-2 color-blue-200 rounded shadow-lg border border-gray-300 font-thin text-xl md:text-2xl text-center hover:border-purple-300"
            placeholder="type a package name..."
          />
          {isLoading ? (
            <span className="flex mx-5">
              <span className="h-10 w-10 animate-ping absolute inline-flex rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-10 w-10 bg-purple-500"></span>
            </span>
          ) : (
            <button
              // disabled={pkgName.length < 1}
              onClick={handleScan}
              className="px-8 py-2 w-full md:h-14 bg-gradient-to-r from-purple-600 to-purple-500 rounded shadow-lg text-purple-100 text-xl md:text-2xl"
            >
              Scan!
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
