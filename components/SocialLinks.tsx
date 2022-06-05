import SocialLink from "./SocialLink";

export default function SocialLinks() {
  return (
    <p className="buttons is-centered">
	<SocialLink
	  href="mailto:info@titco.org"
	  icon="send"
	  text="Send us an email"
	/>
	<SocialLink
	  href="https://github.com/titco"
	  icon="github"
	  text="Visit us on GitHub"
	/>
	<SocialLink
	  href="/"
	  icon="slack" 
	  text="Join us on Slack"
	/>
    </p>
  );
}
