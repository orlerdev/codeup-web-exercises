(function(){
  "use strict";

  let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
  let planetsArray;

  /**
   * TODO:
   * Convert planetsString to an array, and save it in a variable named
   * planetsArray.
   * console.log planetsArray to check your work
   */



  //

  /**
   * TODO:
   * Create a string with <br> tags between each planet. console.log() your
   * results. Why might this be useful?
   *
   * planetsString = planetsArray.join("<br>");
   *
   *
   * BONUS:
   * Create another string that would display your planets in an undordered
   * list. You will need an opening AND closing <ul> tags around the entire
   * string, and <li> tags around each planet.
   */

  planetsArray = planetsString.split("|");
  // console.log(planetsArray);

  planetsString = planetsArray.join("<br>");
  // console.log(planetsString);

  const altPlanetsArr = Array.from(planetsString);
  // console.log(altPlanetsArr);

  // create unordered list from planetsArray
  // <ul><li>
  // "Mercury"
  // </li><li>
  // "Venus"
  // </li><li>
  // "Earth"
  // </li><li>
  // "Mars"
  // </li><li>"
  // Jupiter"
  // </li><li>
  // "Saturn"
  // </li><li>
  // "Uranus"
  // </li><li>
  // "Neptune"
  // </li></ul>
  const arrayToUnorderedList = (array) => `<ul>\n\t<li> ${array.join(`</li>\n\t<li>`)} </li>\t\n</ul>`;
  
  // let bonusString = arrayToUnorderedList(planetsArray);
  console.log(arrayToUnorderedList(planetsArray));


})();

