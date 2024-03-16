import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function turnVolumeUp() {
  const currentVolume = await runAppleScript('return input volume of (get volume settings)');

  await runAppleScript(`set volume input volume ${parseInt(currentVolume) + 5}`);
  await closeMainWindow({ clearRootSearch: true });
}
