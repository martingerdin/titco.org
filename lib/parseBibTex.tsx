export function parseBibTex(entry: any) {
  let parsedEntry = entry
    .split("\n")
    .map((line: any) => {
      return line
        .replace(/^article\{([\w]*)\,/, "key = $1,")
        .replace(/^\s*([a-z]*)\s=\s{?/, '"$1": "')
        .replace(/\}?\,?\s*$/, '",')
        .replace(/^"\,$/, "");
    })
    .join("\n")
    // Replace strange letters
    .replace(/\\"{a}/g, "ä")
    .replace(/\\{aa}/g, "å")
    .replace(/\\"{o}/g, "ö")
    .replace(/\\"{A}/g, "Ä")
    .replace(/\\{AA}/g, "Å")
    .replace(/\\"{O}/g, "Ö")
    .replace(/{\\&}/g, "&")
    // Convert bibtex to something that can be parsed as json
    .replace(/\{/g, "")
    .replace(/\}/g, "");
  let jsonEntry = parsedEntry;
  const i = parsedEntry.lastIndexOf(",");
  if (i != -1) {
    jsonEntry = jsonEntry.substr(0, i);
  }
  const json = "{" + jsonEntry + "}";
  let jsonParsed;
  try {
    jsonParsed = JSON.parse(json);
    jsonParsed.message = "";
    jsonParsed.error = false;
    let numMonth = 1;
    switch (jsonParsed.month) {
      case "jan":
	numMonth = 1;
	break;
      case "feb":
	numMonth = 2;
	break;
      case "mar":
	numMonth = 3;
	break;
      case "apr":
	numMonth = 4;
	break;
      case "may":
	numMonth = 5;
	break;
      case "jun":
	numMonth = 6;
	break;
      case "jul":
	numMonth = 7;
	break;
      case "aug":
	numMonth = 8;
	break;
      case "sep":
	numMonth = 9;
	break;
      case "oct":
	numMonth = 10;
	break;
      case "nov":
	numMonth = 11;
	break;
      case "dec":
	numMonth = 12;
	break;
    };
    let date = new Date(jsonParsed.year + "-" + numMonth + "-1");
    jsonParsed.date = date.toISOString();
  } catch (error) {
    jsonParsed = {
      message: "The publication could not be parsed",
      error: true,
    };
  }
  jsonParsed.string = parsedEntry;
  return jsonParsed;
}
