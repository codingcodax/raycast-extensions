import { LocalStorage, closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function toggleMute() {
  const currentVolume = await runAppleScript("return output volume of (get volume settings)");

  const audioOutputIsMuted = currentVolume.trim() === "0";

  if (currentVolume.trim() !== "0" && currentVolume.trim() !== "100") {
    await LocalStorage.setItem("audioOutputVolume", currentVolume);
  }

  if (!audioOutputIsMuted) {
    await runAppleScript(`set volume output volume 0`);
  } else {
    const previousVolume = await LocalStorage.getItem<string>("audioOutputVolume");
    await runAppleScript(`set volume output volume ${previousVolume || "100"}`);
    await LocalStorage.removeItem("audioOutputVolume");
  }
  await closeMainWindow({ clearRootSearch: true });
}
