import { buildBadger } from "../badge/implementation";
import { ChromeApi } from "../chrome/api";
import { buildMessenger } from "../messaging/implementation";
import { buildNotifier } from "../notifications/implementation";
import { githubLoaderSingleton } from "../state/github-loader";
import { buildStore } from "../storage/implementation";
import { Environment } from "./api";

export function buildEnvironment(chromeApi: ChromeApi): Environment {
  return {
    store: buildStore(chromeApi),
    githubLoader: githubLoaderSingleton,
    notifier: buildNotifier(chromeApi),
    badger: buildBadger(chromeApi),
    messenger: buildMessenger(chromeApi)
  };
}