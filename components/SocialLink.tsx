import Link from "next/link";
import { Icon } from "./Icon";

interface socialLinkProps {
  href: string;
  icon: string;
  text: string;
}

export default function SocialLink({
  href,
  icon,
  text,
}: socialLinkProps) {
  return (
    <Link href={href} passHref>
	<a className="button is-link is-light">
	    <span className="icon">
		<Icon icon={icon} />
	    </span>
	    <span>
		{text}
	    </span>
	</a>
    </Link>
  );
}
