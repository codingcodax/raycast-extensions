import { runAppleScript } from "run-applescript";

export default async function turnVolumeDown() {
  const currentVolume = await runAppleScript('return input volume of (get volume settings)');

  await runAppleScript(`set volume input volume ${parseInt(currentVolume) - 5}`);
}
