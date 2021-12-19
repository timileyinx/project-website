alert ("Stay as long as you like, we even have cookies !");
function changeCSS(){
//form validation using external js
function validate() {
  let x = document.forms["xform"]["xname"].value;
  if (x == "") {
    alert("*this field must be filled out");
    return false;
  }
}