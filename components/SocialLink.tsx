import Link from "next/link";
import { Icon } from "./Icon";

interface socialLinkProps {
  href: string;
  icon: string;
  id: string;
  text: string;
  dropdown?: string;
  align?: "" | "is-right";
  iconSize?: string;
}

export default function SocialLink({
  href,
  icon,
  id,
  text,
  dropdown = "",
  align = "",
  iconSize = "large",
}: socialLinkProps) {
  return (
    <div className={`dropdown is-hoverable ${dropdown} ${align}`}>
      <div className="dropdown-trigger">
        <Link href={href} passHref>
          <a>
            <span
              className={`icon social-link mx-1 is-${iconSize}`}
              aria-haspopup="true"
              aria-controls={id}
            >
              <Icon icon={icon} />
            </span>
          </a>
        </Link>
      </div>
      <div className="dropdown-menu" id={id} role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">{text}</div>
        </div>
      </div>
    </div>
  );
}
