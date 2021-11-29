import { kDefaultStorePrefix } from "./constant";

export function getKey(
  packageName: string,
  prefix = kDefaultStorePrefix
): string {
  return `${prefix}@${packageName}`;
}
export class ScannerStorage {
  private prefix: string = kDefaultStorePrefix;

  constructor(prefix?: string) {
    if (prefix) {
      this.prefix = prefix;
    }
  }

  set() {}
  get() {}
  remove() {}
  clear() {}
}
