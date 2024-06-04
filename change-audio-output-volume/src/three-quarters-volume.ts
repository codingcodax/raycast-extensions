import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function threeQuartersVolume() {
  await runAppleScript(`set volume output volume 75`);
  await closeMainWindow({ clearRootSearch: true });
}
