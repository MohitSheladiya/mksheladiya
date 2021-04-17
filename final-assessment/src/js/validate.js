/*
 * Name     : Mohit Kishorbhai Sheladiya
 * Student #: 117979203
 * Date     : 16th April, 2021
 */

function validate(event) {
  function latitude() {
    var lat = document.querySelector("#latitude");
    var flag = false;
    lat = parseFloat(lat.value);
    if (lat > 90 || lat < -90 || isNaN(lat)) {
      document.querySelector("#latitudeErr").innerText =
        "* must be a valid Latitude (-90 to 90)";
      event.preventDefault();
      flag = false;
    }
    if (lat <= 90 && lat >= -90)
      document.getElementById("latitudeErr").innerHTML = "*";
    return flag;
  }

  function longitude() {
    var long = document.querySelector("#longitude");
    var flag = false;
    long = parseFloat(long.value);
    if (long > 180 || long < -180 || isNaN(long)) {
      document.querySelector("#longitudeErr").innerText =
        "* must be a valid Longitude (-180 to 180)";
      event.preventDefault();
      flag = false;
    }
    if (long <= 180 && long >= -180)
      document.getElementById("longitudeErr").innerHTML = "*";
    return flag;
  }

  var flag1 = latitude();
  var flag2 = longitude();

  if (lat <= 90 && lat >= -90 && long <= 180 && long >= -180) {
    flag1 = true;
    flag2 = true;
  }
  return flag1 && flag2;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
