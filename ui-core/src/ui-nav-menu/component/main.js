/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    let myTopnav = document.getElementById("myTopnav");
    if (myTopnav.className === "topnav") {
      myTopnav.className += " responsive";
    } else {
      myTopnav.className = "topnav";
    }
  }