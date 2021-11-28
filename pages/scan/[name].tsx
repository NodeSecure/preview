import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import Flags from "../../components/Flags";
import Box from "../../components/Box";
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
      <div className="flex justify-center items-center divide-x ">
        {/* title */}
        <div className="flex flex-col text-gray-200 px-6">
          <h2 className="text-4xl font-bold">{name}</h2>
          <h3 className="font-light">{analysis.version}</h3>
        </div>
        {/* content */}
        <div>
          {/* numbers */}
          <h3 className="px-10 text-2xl font-bold text-gray-200 mb-6">Numbers:</h3>
          <div className="px-10 flex mb-6">
            <Box label="Size" value={(analysis.size / 1000) + " ko"}/>
            <Box label="Dependencies" value={analysis.dependencyCount}/>
          </div>
          {/* flags */}
          <h3 className="px-10 text-2xl font-bold text-gray-200 mb-6">Flags:</h3>
          <div className="text-gray-200 px-10">
            {analysis.flags.map((flag: string) => <Flags key={flag} type={flag} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;