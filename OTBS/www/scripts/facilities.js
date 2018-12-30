
(function () {
    "use strict";
    //set variables
    var button;
    var link;
    $(document).ready(function () {
        //bind buttons
        $("#btnviewreservation").bind("click", function () {
            window.location = "viewreservation.html";
        });
        $("#bthfacilities").bind("click", function () {
            window.location = "facilities.html";
        });
        $("#btncancelreservation").bind("click", function () {
            window.location = "cancelreservation.html";
        });
        $("#btnhomepage").bind("click", function () {
            window.location = "homepage.html";
        });
        $("#logout").bind("click", function () {
            window.location = "index.html";
        });
    });

})();