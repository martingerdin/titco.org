import Link from "next/link";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";

interface LinkButtonInterface {
  href: string;
  text: string;
}

export function LinkButton({ href, text }: LinkButtonInterface) {
  return (
    <Link href={href} passHref>
      <a className="button is-link">
        <span>{text}</span>
        <span className="icon is-small pl-2">
          <Icon path={mdiOpenInNew} />
        </span>
      </a>
    </Link>
  );
}
