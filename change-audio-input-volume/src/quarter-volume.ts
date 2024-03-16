import { runAppleScript } from "run-applescript";

export default async function quarterVolume() {
  await runAppleScript(`set volume input volume 25`);
}
