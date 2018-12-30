(function () {
    "use strict";

    $(document).ready(function () {

        $("#logout").bind("click", function () {

            window.location = "index.html";
        });

        $("#gridView").bind("click", function () {
           
            gridView();
        });
        $("#listView").bind("click", function () {
            listView();
        });

        gridView();
    });


// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "43%";
     
    }

}




})();





 


