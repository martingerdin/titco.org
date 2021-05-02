import { ReactElement, useEffect } from "react";
import Navbar from "./Navbar";

interface layoutProps {
  children: ReactElement | ReactElement[]
}

export default function Layout({children}: layoutProps) {
  useEffect(() => {document.querySelector("body").classList.add("has-navbar-fixed-top")})
  
  return (
    <>
	<Navbar />
	{children}
    </>
  );
}
