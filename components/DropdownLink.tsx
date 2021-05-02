import Link from "next/link";
import Icon from "@mdi/react";
import styled from "styled-components";

interface dropdownLinkProps {
  href: string,
  icon: any,
  id: string,
  text: string,
  iconSize?: string
}

export default function DropdownLink({href, icon, id, text, iconSize = "large"}: dropdownLinkProps) {
  const SpanStyled = styled.span`
      :hover {
      cursor: pointer;
      color: black;
      }
  `;
  
  return (
    <div className="dropdown is-hoverable">
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
