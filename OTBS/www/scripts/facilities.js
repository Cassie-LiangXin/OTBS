
(function () {
    "use strict";
    var button;
    var link;
    $(document).ready(function () {

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

    });

})();