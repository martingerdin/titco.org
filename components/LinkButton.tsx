import Link from "next/link";
import { Icon } from "./Icon";

interface LinkButtonInterface {
  href: string;
  text: string;
}

export function LinkButton({ href, text }: LinkButtonInterface) {
  return (
    <Link href={href} passHref>
      <a className="button is-link">
        <span>{text}</span>
        <span className="icon is-small pl-1">
          <Icon icon="openInNew" />
        </span>
      </a>
    </Link>
  );
}
