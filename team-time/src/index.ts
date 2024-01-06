import { Clipboard, environment, LaunchType, Toast, updateCommandMetadata } from "@raycast/api";

const command = async () => {
  const now = new Date();

  const mexico = now.toLocaleString(undefined, { timeZone: "America/Mexico_City", timeStyle: "short" });
  const venezuela = now.toLocaleString(undefined, { timeZone: "America/Caracas", timeStyle: "short" });
  const newYork = now.toLocaleString(undefined, { timeZone: "America/New_York", timeStyle: "short" });
  const buenosAires = now.toLocaleString(undefined, { timeZone: "America/Argentina/Buenos_Aires", timeStyle: "short" });

  const subtitle = `🇲🇽 ${mexico}    🇺🇸 ${newYork}  🇻🇪 ${venezuela}  🇦🇷 ${buenosAires}`;
  await updateCommandMetadata({ subtitle });

  if (environment.launchType === LaunchType.UserInitiated) {
    const toast = new Toast({
      style: Toast.Style.Success,
      title: "Refreshed!",
      message: subtitle,
    });
    toast.primaryAction = {
      title: "Copy to Clipboard",
      shortcut: { modifiers: ["cmd", "shift"], key: "c" },
      onAction: () => Clipboard.copy(subtitle),
    };
    await toast.show();
  }
};

export default command;
