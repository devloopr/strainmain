import { renderData } from "./js/ui/renderData.js";
import { filterSearch } from "./js/ui/filterSearch.js";
import { displayMessage } from "./js/ui/displayMessage.js";

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";

// const urler = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";
// const proxy = "https://noroffcors.herokuapp.com/";
// const url = proxy + urler;

async function getData() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const data = json.data;

    filterSearch(data);
    renderData(data);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".login");
  }
}

getData();
