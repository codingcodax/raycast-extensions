import { runAppleScript } from "run-applescript";

export default async function fullVolume() {
  await runAppleScript(`set volume input volume 100`);
}
