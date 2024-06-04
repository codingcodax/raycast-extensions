import { LaunchProps, closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function setVolume(props: LaunchProps<{ arguments: Arguments.SetVolume }>) {
  const { volume } = props.arguments;

  await runAppleScript(`set volume output volume ${volume}`);
  await closeMainWindow({ clearRootSearch: true });
}
