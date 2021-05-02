import Link from "next/link";
import Icon from "@mdi/react";
import styled from "styled-components";

interface socialLinkProps {
  href: string,
  icon: any,
  id: string,
  text: string,
  dropdown?: string,
  align?: "" | "is-right",
  iconSize?: string
}

export default function SocialLink({href, icon, id, text, dropdown = "", align = "", iconSize = "large"}: socialLinkProps) {
  const SpanStyled = styled.span`
      :hover {
      cursor: pointer;
      color: black;
      }
  `;
  
  return (
    <div className={`dropdown is-hoverable ${dropdown} ${align}`}>
	<div className="dropdown-trigger">
	    <Link href={href} passHref>
		<a>
		    <SpanStyled
		      className={`icon mx-2 is-${iconSize}`}
		      aria-haspopup="true"
		      aria-controls={id}
		    >
			<Icon path={icon} />
		    </SpanStyled>
		</a>
	    </Link>
	</div>
	<div className="dropdown-menu" id={id} role="menu">
	    <div className="dropdown-content">
		<div className="dropdown-item">
		    {text}
		</div>
	    </div>
	</div>
    </div>
  );
}
