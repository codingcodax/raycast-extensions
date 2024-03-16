import { LaunchProps } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function setVolume(props: LaunchProps<{ arguments: Arguments.SetVolume }>) {
  const { volume } = props.arguments;

  await runAppleScript(`set volume input volume ${volume}`);
}
