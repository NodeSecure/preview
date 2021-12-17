import type { NextApiRequest, NextApiResponse } from "next";

import { getManifest, FlagObject } from "@nodesecure/flags";
import { loadRegistryURLFromLocalSystem } from "@nodesecure/npm-registry-sdk";
import { from, Scanner } from "@nodesecure/scanner";

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
    const payload = await from(name as string, {
      vulnerabilityStrategy: "npm",
    });
    const formattedAnalysis = formatPayload(payload, name as string);
    res.status(200).json(formattedAnalysis);
  } else {
    res.status(404).json({ error: "Impossible to scan this package!" });
  }
}

/**
 * HELPERS
 */

const flagMap = Object.values(getManifest()).reduce((acc, curr) => {
  acc[curr.title] = curr;
  return acc;
}, {} as Record<string, FlagObject>);

function formatPayload(payload: Scanner.Payload, pkgName: string) {
  const id = payload.id;
  const pkg = payload.dependencies[pkgName as string];
  const lastVersion = pkg.metadata.lastVersion;
  const flags = pkg[lastVersion].flags;
  const size = pkg[lastVersion].size;
  const dependencyCount = pkg.metadata.dependencyCount;

  return {
    version: lastVersion,
    // @ts-expect-error - Wait for @nodesecure/flags fix
    flags: flags.reduce((acc: Array<[string, string]>, flag: string) => {
      const flagObject = flagMap[flag];

      if (flagObject) {
        acc.push([flagObject.emoji, flagObject.tooltipDescription]);
      }

      return acc;
    }, []),
    name: pkgName,
    id,
    dependencyCount,
    size,
  };
}
