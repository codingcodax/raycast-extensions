import { runAppleScript } from "run-applescript";

export default async function threeQuartersVolume() {
  await runAppleScript(`set volume input volume 75`);
}
