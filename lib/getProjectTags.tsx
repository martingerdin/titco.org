interface getProjectTagsInterface {
  status: string;
  start: string;
  end?: string;
  dataset?: string;
}

export function getProjectTags({status, start, end, dataset}: getProjectTagsInterface) {
  const tags = [
    { heading: "Status", value: status },
    { heading: "Start", value: start },
  ];
  if (typeof end !== "undefined") tags.push({ heading: "End", value: end });
  let dataTag = {
    heading: "Data",
    value: "Not yet available",
    color: "danger is-light",
  };
  if (typeof dataset !== "undefined") {
    dataTag.value = "Available";
    dataTag.color = "success is-light";
  }
  tags.push(dataTag);
  return tags;
}


