import Icon from "@mdi/react";
import { mdiCheck, mdiGithub, mdiSlack, mdiBookOpen, mdiDatabase, mdiSend } from "@mdi/js";
import DropdownLink from "./DropdownLink";

export default function DropdownLinks() {
  return (
    <>
    <DropdownLink
    href="mailto:info@titco.org"
    icon={mdiSend}
    id="email"
    text="Send us an email"
    />
    <DropdownLink
    href="https://github.com/titco"
    icon={mdiGithub}
    id="github"
    text="Visit us on GitHub"
    />
    <DropdownLink
    href="/"
    icon={mdiSlack}
    id="slack"
    text="Join us on Slack"
    />
    </>
  );
}
