/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var quien = who[Math.round(Math.random() * (who.length - 1))];
  var hizo = action[Math.round(Math.random() * (action.length - 1))];
  var que = what[Math.round(Math.random() * (what.length - 1))];
  var cuando = when[Math.round(Math.random() * (when.length - 1))];

  document.getElementById("excuse").innerHTML = quien + hizo + que + cuando;
};
