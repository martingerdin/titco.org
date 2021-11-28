import Icon from "@mdi/react";
import { mdiCheck, mdiGithub, mdiSlack, mdiBookOpen, mdiDatabase, mdiSend } from "@mdi/js";
import SocialLink from "./SocialLink";

interface socialLinksProps {
  dropdown?: string
}

export default function SocialLinks({ dropdown = "" }: socialLinksProps) {
  return (
    <>
	<SocialLink
	  href="mailto:info@titco.org"
	  icon="send"
	  id="email"
	  text="Send us an email"
	  dropdown = {dropdown}
	/>
	<SocialLink
	  href="https://github.com/titco"
	  icon="github"
	  id="github"
	  text="Visit us on GitHub"
	  dropdown = {dropdown}
	/>
	<SocialLink
	  href="/"
	  icon="slack" 
	  id="slack"
	  text="Join us on Slack"
	  dropdown = {dropdown}
	  align="is-right"
	/>
    </>
  );
}
