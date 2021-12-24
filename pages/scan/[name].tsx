import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import Flags from "../../components/Flags";
import Box from "../../components/Box";
import BackIcon from "../../components/Back";
import { getKey } from "../../utils/ScannerStorage";

const Home: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [analysis, setAnalysis] = useState<any>(null);
  const [scale, setScale] = useState<number>(0);

  useEffect(() => {
    if (typeof name === "string") {
      const maybeInStoreAnalysis = localStorage.getItem(getKey(name));

      if (maybeInStoreAnalysis) {
        setAnalysis(JSON.parse(maybeInStoreAnalysis));
        setTimeout(() => {
          setScale(100);
        }, 300);
      } else {
        router.push("/");
      }
    }
  }, [name, setAnalysis, router]);

  if (!analysis) {
    return null;
  }

  return (
    <Layout>
      <div
        className={`flex flex-col md:flex-row justify-center items-center md:divide-x transform transition-all duration-150 ease-out scale-${scale}`}
      >
        <Head>
          <title>{(name as string).toUpperCase()} scan</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {/* title */}
        <div className="text-gray-200 md:px-6 mb-8 md:mb-0">
          <div className="flex md:flex-col justify-between gap-8">
            <BackIcon onClick={() => router.back()} />
            <div className="grow">
              <h2 className="text-4xl font-bold ">{name}</h2>
              <h3 className="font-light">{analysis.version}</h3>
            </div>
          </div>
        </div>
        {/* content */}
        <div>
          {/* numbers */}
          <h3 className="px-10 text-2xl font-bold text-gray-200 mb-6">
            Numbers:
          </h3>
          <div className="px-10 flex flex-col gap-4 md:flex-row mb-6">
            <Box label="Size" value={analysis.size / 1000 + " ko"} />
            <Box label="Dependencies" value={analysis.dependencyCount} />
          </div>
          {/* flags */}
          <Flags flags={analysis.flags} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
