import { ReactElement } from "react";
import Navbar from "./Navbar";

interface layoutProps {
  children: ReactElement | ReactElement[]
}

export default function Layout({children}: layoutProps) {
  return (
    <>
	<Navbar />
	{children}
    </>
  );
}
