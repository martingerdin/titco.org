import Head from "next/head";
import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Breadcrumb } from "./Breadcrumb";
import capitalise from "../lib/capitalise";

interface layoutProps {
  children: ReactElement | ReactElement[];
  title?: string;
  subtitle?: string;
  currentPageName?: string | null;
}

export default function Layout({
  children,
  title = "",
  subtitle = "",
  currentPageName = null,
}: layoutProps) {
  const router = useRouter();
  const { asPath } = router;
  const pathNames = asPath.split("/");

  return (
    <>
	<Head>
	    <title>{title} | TITCO </title>
	</Head>
	<div
	  style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
	>
	    <Navbar activePage={capitalise(pathNames[1])} />
	    <div style={{ flexGrow: "1", paddingTop: "3.25rem" }}>
		<Breadcrumb pathNames={pathNames} currentPageName={currentPageName} />
		{(title !== "" || subtitle !== "") && (
		  <section className="section">
		      <div className="container has-text-centered">
			  {title !== "" && <h1 className="title">{title}</h1>}
			  {subtitle !== "" && <h2 className="subtitle">{subtitle}</h2>}
		      </div>
		  </section>
		)}
		{children}
	    </div>
	    <Footer />
	</div>
    </>
  );
}
