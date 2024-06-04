import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function fullVolume() {
  await runAppleScript(`set volume output volume 100`);
  await closeMainWindow({ clearRootSearch: true });
}
