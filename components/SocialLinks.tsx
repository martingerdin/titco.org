import SocialLink from "./SocialLink";

interface socialLinksProps {
  isHome?: boolean;
}

export default function SocialLinks({isHome = false}: socialLinksProps) {
  const data = [
    {
      href: "mailto:info@titco.org",
      icon: "send",
      text: "Send us an email",
    },
    {
      href: "https://github.com/titco",
      icon: "github",
      text: "Visit us on GitHub",
    },
    {
      href: "/",
      icon: "slack",
      text: "Join us on Slack",
    },
  ]
  
  return (
    <>
	{data.map((item, key) => {
	  const {href, icon, text} = item;
	  const LinkItem = () => <SocialLink href={href} icon={icon} text={text} />
	  return (
	  <>
	      {isHome
	      ? <LinkItem key={key} />
	      : (
		<div className="navbar-item" key={key} >
		    <LinkItem />  
		</div>
	      )}
	  </>
	  );
	})}
    </>
  );
}
