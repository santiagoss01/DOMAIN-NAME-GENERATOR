/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#domainname").innerHTML = generateDomain();
};

/*let domainname = () => {
  let pronoun = ["thy", "our", "your", "the", "that"];
  let adj = ["great", "big", "incredible", "unspeakable", "unreal"];
  let noun = ["jogger", "racoon", "cat", "argonaut", "snake"];
  let extension = [".com", ".io", ".es", ".net"];
  let randompronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let randomadj = adj[Math.floor(Math.random() * adj.length)];
  let randomnoun = noun[Math.floor(Math.random() * noun.length)];
  let randomextension = extension[Math.floor(Math.random() * extension.length)];
  let randomdomain = randompronoun.concat(
    randomadj + randomnoun + randomextension
  );

  return randomdomain;
};*/

let generateDomain = () => {
  let pronoun = ["thy", "our", "your", "the", "that"];
  let adj = ["great", "big", "incredible", "unspeakable", "unreal"];
  let noun = ["jogger", "racoon", "cat", "argonaut", "snake"];
  let extension = [".com", ".io", ".es", ".net"];

  let concatenation = "<ol>";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        for (let z = 0; z < extension.length; z++) {
          concatenation +=
            "<li>" + pronoun[i] + adj[j] + noun[x] + extension[z] + "</li>";
        }
      }
    }
  }

  concatenation += "</ol>";
  return concatenation;
};
