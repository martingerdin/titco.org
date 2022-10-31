import Image from "next/image";
import kiPhoto from "../public/aula-medica-winter.jpg";
import Layout from "../components/Layout";
import AnnualMeetingAgenda2022 from "../components/AnnualMeetingAgenda2022";

export default function AnnualMeetingPage() {
  return (
    <Layout
      title="Annual Meeting 2022"
      subtitle="Welcome to Stockholm December 5-7!"
      currentPageName="Annual Meeting 2022"
    >
	<section className="section">
	    <div className="container" style={{maxWidth: "1000px"}}>
		<div className="columns">
		    <div className="column">
			<Image
			  src={kiPhoto}
			  alt="Photo of Karolinska Institutet's Aula Medica during Winter by Katarina Sternudd"
			  title ="Photo of Karolinska Institutet's Aula Medica during Winter by Katarina Sternudd" />
		    </div>
		    <div className="column">
			<p>The 2022 TITCO annual meeting will take place at <a href="https://ki.se/en">Karolinska Institutet</a> in <a href="https://www.visitstockholm.com/">Stockholm</a>, Sweden. This meeting will celebrate 10 years of TITCO and will be the consortium's first in-person meeting after some very long years of global pandemic. Meeting delegates will stay at the <a href="https://elite.se/en/hotels/stockholm/hotel-carolina-tower/?gclid=Cj0KCQjwwfiaBhC7ARIsAGvcPe78OMpkcrNTZt_apB4wYFSOuy2R1NM2AENcJfqvmdms0aucwnhnDkcaAv7QEALw_wcB">Elite Hotel Carolina Tower</a>, which is just across the road from Karolinska Instituet and the <a href="https://www.karolinska.se/en/karolinska-university-hospital/">Karolinska University Hospital</a>.</p>
			<p>The easiest way to travel between Arlanda Airport and the Hotel is by <a href="https://www.flygbussarna.se/en/">Flygbussarna</a>, which stops just outside the hotel. All delegates will receive vouchers to use on the buses for this purpose. All meeting venues and lunch and dinner restaurants, except the last dinner, are within close walking distance from the hotel.</p>
			<p>It's very easy to travel around Stockholm using <a href="https://sl.se/en/in-english">public transport</a>, with stops just outside the hotel. Feel free to read up on <a href="https://www.visitstockholm.com/">visitstockholm.com</a> before your visit!</p>
		    </div>
		</div>
		<h3 className="title is-spaced">Agenda</h3>
		<AnnualMeetingAgenda2022 />
	    </div>
	</section>
    </Layout>
  );
}
