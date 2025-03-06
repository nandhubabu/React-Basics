import ReactDOM from "react-dom/client";
import { createElement } from "react";
const date = new Date();
const current_time = date.getHours();

let greetings;

if (current_time < 12) {
  greetings = "Good Morning";
} else if (current_time < 18) {
  greetings = "Good Evening";
} else {
  greetings = "Good Night";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(createElement("h1", null, greetings));
