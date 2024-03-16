import { LocalStorage, closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function toggleMute() {
  const currentVolume = await runAppleScript('return input volume of (get volume settings)');

  const audioInputIsMuted = currentVolume.trim() === "0";

  if (currentVolume.trim() !== "0" && currentVolume.trim() !== "100") {
    await LocalStorage.setItem("audioInputVolume", currentVolume);
  }

  if (!audioInputIsMuted) {
    await runAppleScript(`set volume input volume 0`);
  } else {
    const previousVolume = await LocalStorage.getItem<string>("audioInputVolume");
    await runAppleScript(`set volume input volume ${previousVolume || "100"}`);
    await LocalStorage.removeItem("audioInputVolume");
  }
  await closeMainWindow({ clearRootSearch: true });
}
