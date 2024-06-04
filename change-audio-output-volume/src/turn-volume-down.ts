import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function turnVolumeDown() {
  const currentVolume = await runAppleScript("return output volume of (get volume settings)");

  await runAppleScript(`set volume output volume ${parseInt(currentVolume) - 5}`);
  await closeMainWindow({ clearRootSearch: true });
}
