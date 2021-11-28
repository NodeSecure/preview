import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import { getKey } from "../../utils/ScannerStorage";

const Home: NextPage = () => {
  const router = useRouter()
  const { name } = router.query
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    if (typeof name === "string") {
      const maybeInStoreAnalysis = localStorage.getItem(getKey(name));

      if (maybeInStoreAnalysis) {
        setAnalysis(JSON.parse(maybeInStoreAnalysis));
      }
    }
  }, [name, setAnalysis]);

  if (!analysis) {
    return (
      <Layout>
        Loading...
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="flex">
        {/* title */}
        <div className="flex flex-col text-purple-200">
          <h2 className="text-4xl font-bold text-purple-200">{name}</h2>
          <h3 className="font-light">{analysis.version}</h3>
        </div>
        {/* content */}
      </div>
    </Layout>
  );
};

export default Home;