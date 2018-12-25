(function () {
    "use strict";
    //Button1
    $(document).ready(function () {
        $("#btnFacilities").bind("click", function () {
            window.location = "facilities.html";
        });
    });
    //Button2
    $(document).ready(function () {
        $("#btnFoodDelivery").bind("click", function () {
            
            //window.location = "?????.html";
        });
    });
    //Button3
    $(document).ready(function () {
        $("#btnHouseKeeping").bind("click", function () {

            window.location = "housekeeping.html";
        });
    });
    //button 4
    $("#btnEvent").bind("click", function () {
        window.location = "bookevent.html";
    });

})();
