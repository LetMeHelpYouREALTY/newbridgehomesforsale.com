import { getRequestHostname } from "./canonical-url";
import { getDomainConfig, type DomainConfig } from "./domain-config";

export async function getPageDomainConfig(): Promise<DomainConfig> {
  return getDomainConfig(getRequestHostname());
}
