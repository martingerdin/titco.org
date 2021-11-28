import { GoogleCharts } from "google-charts";
import { useState } from "react";

interface mapProps {
  data: location[];
}

interface location {
  latitude: number;
  longitude: number;
  name: string;
}

export function Map({ data }: mapProps) {
  const [mapIsLoaded, setMapIsLoaded] = useState(false);

  const head = [
    { type: "number", id: "Latitude" },
    { type: "number", id: "Longitude" },
    { type: "string", id: "Name" },
  ];

  function drawMap() {
    const mapData = GoogleCharts.api.visualization.arrayToDataTable(
      [].concat(
        [head],
        data.map((location) => {
          const { latitude, longitude, name } = location;
          return [latitude, longitude, name];
        })
      )
    );

    var options = {
      showTooltip: true,
      showInfoWindow: false,
      mapType: "terrain",
    };

    var map = new GoogleCharts.api.visualization.Map(
      document.getElementById("chart_div")
    );

    setMapIsLoaded(true);
    map.draw(mapData, options);
  }

  GoogleCharts.load(drawMap, {
    packages: ["map"],
    mapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  return (
    <div className="has-ratio">
	<div
	  className="has-background-light"
	  style={{
            display: `${!mapIsLoaded ? "flex" : "none"}`,
	    alignItems: "center",
	    justifyContent: "center",
            width: "100%",
            height: "100%",
	  }}>
	    <span className="button is-loading is-light"></span>
	</div>
	<div
	  id="chart_div"
	  style={{
            display: `${mapIsLoaded ? "block" : "none"}`,
            width: "100%",
            height: "100%",
	  }}
	></div>
    </div>
  );
}
