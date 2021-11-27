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
  } catch (error) {
    jsonParsed = {
      message: "The publication could not be parsed",
      error: true,
    };
  }
  return jsonParsed;
}
