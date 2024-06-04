import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function halfVolume() {
  await runAppleScript(`set volume output volume 50`);
  await closeMainWindow({ clearRootSearch: true });
}
