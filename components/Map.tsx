import { Chart } from "react-google-charts";
import { GoogleCharts } from "google-charts";
import { useEffect } from "react";

interface mapProps {
  apiKey: string;
}

export function Map () {
  useEffect(() => {
    const drawMap = () => {
      const data = GoogleCharts.api.visualization.arrayToDataTable([
	[
	  {type: "number", id: "Latitude"},
	  {type: "number", id: "Longitude"},
	  {type: "string", id: "Name"}
	],
	[
	  19.036941675407327,
	  72.86009054046254,
	  "LTMGH"
	],
	[
	  19.002646061161908,
	  72.84205544046206,
	  "KEM"
	],
	[
	  28.56830255340446,
	  77.20077372896768,
	  "JPNATC"
	],
	[
	  22.539791106134892,
	  88.34254487862368,
	  "SSKM"
	],
      ]);

      var options = {
	showTooltip: true,
	showInfoWindow: false,
	mapType: "terrain"
      };

      var map = new GoogleCharts.api.visualization.Map(document.getElementById('chart_div'));

      map.draw(data, options);
    };

    console.log(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
    
    GoogleCharts.load(drawMap, {
      "packages": ["map"],
      "mapsApiKey": process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    });
  })

  return (
    <div id="chart_div" style={{width: "100%", height: "250px"}}></div>
  );
}

export const Map2 = () => {
  const mapApi = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  return (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="GeoChart"
      data={[
	[
	  {type: "number", id: "Latitude"},
	  {type: "number", id: "Longitude"},
	  {type: "string", id: "Name"}
	],
	/* SSKM */
	[
	  18.963550466365593,
	  72.83362384231758
	],
	/* JJ */
	[
	  22.539573101405075,
	  88.34219082701736,
	],
	/* MAMC */
	[
	  28.635786865055053,
	  77.23992069456462
	],
	/* St Johns */
	[
	  12.929350643307103,
	  77.61994116560268
	],
	/* KBBH */
	[
	  19.0574,
	  72.8333
	]
      ]}
      options={{
	region: "IN",
	displayMode: "markers",
      }}
      mapsApiKey={mapApi}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
