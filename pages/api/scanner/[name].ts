// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import type { Flags } from "@nodesecure/flags";

import { loadRegistryURLFromLocalSystem } from "@nodesecure/npm-registry-sdk";
import { from } from "@nodesecure/scanner";

loadRegistryURLFromLocalSystem();

type Data =
  | {
      error: string;
    }
  | any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query;

  if (name) {
    const { id, dependencies } = await from(name as string, {
      vulnerabilityStrategy: "npm",
    });

    // FIXME: extract into a separate method
    const pkg = dependencies[name as string];
    const lastVersion = pkg.metadata.lastVersion;
    const flags = pkg[lastVersion].flags;
    const size = pkg[lastVersion].size;
    const dependencyCount = pkg.metadata.dependencyCount;

    const payload = {
      version: lastVersion,
      flags,
      name: name as string,
      id,
      dependencyCount,
      size,
    };
    res.status(200).json(payload);
  } else {
    res.status(404).json({ error: "Impossible to scan this package!" });
  }
}
