import { GoogleCharts } from "google-charts";
import { useEffect, useRef, useState } from "react";


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
  const googlemap = useRef(null);

  useEffect(() => {
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
        showTooltip: false,
        showInfoWindow: false,
        mapType: "hybrid",
      };

      var map = new GoogleCharts.api.visualization.Map(
        googlemap.current,
      );

      try {
        setMapIsLoaded(true);
        map.draw(mapData, options);
      } catch (error) {
        console.error("Error drawing map:", error);
        setMapIsLoaded(false);
      }
    }

    GoogleCharts.load(drawMap, {
      packages: ["map"],
      mapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    })

    document.getElementById("chart_div").style.width = "100%";
    document.getElementById("chart_div").style.height = "100%";
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
        {!mapIsLoaded ? (
          <span className="button is-loading is-light"></span>
        ) : (
          <span>Error loading map</span>
        )}
      </div>
      <div
        id="chart_div"
        ref={googlemap}
        style={{
          display: `${mapIsLoaded ? "block" : "none"}`,
          width: "100%",
          height: "100%",
        }}
      ></div>
    </div>
  );
}
