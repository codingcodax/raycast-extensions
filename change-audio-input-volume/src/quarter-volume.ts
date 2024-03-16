import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function quarterVolume() {
  await runAppleScript(`set volume input volume 25`);
  await closeMainWindow({ clearRootSearch: true });
}
