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

  // create unordered list from planetsArray
  const arrayToUnorderedList = (array) => {
    let bonusList = "<ul><li>" + array.join("</li><li>") + "</li></ul>";
    return bonusList;
  }
  
  let bonusString = arrayToUnorderedList(planetsArray);
  console.log(bonusString);


})();

