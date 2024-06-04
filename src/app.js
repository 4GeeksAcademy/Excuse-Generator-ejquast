/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  function chooseRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  let who = ["My cat", "My grandpa", "The postal worker", "The Nanny"];
  let action = ["stepped on", "threw out", "peed on", "ripped"];
  let what = ["my homework", "my cell phone", "my shoes"];
  let when = [
    "while I was getting ready",
    "before breakfast",
    "after lunch",
    "yesterday evening",
    "while I was on my way to work"
  ];

  const builtExcuse = `${chooseRandomItem(who)} ${chooseRandomItem(
    action
  )} ${chooseRandomItem(what)} ${chooseRandomItem(when)}.`;
  const excuseH1 = document.querySelector("#excuse");
  excuseH1.textContent = builtExcuse;
};
