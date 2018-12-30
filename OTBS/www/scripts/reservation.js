(function () {
    "use strict";


    $(document).ready(function () {
        //bind button
        $("#btnNews").bind("click", function () {
            news();
        });

        $("#btnReservation").bind("click", function () {
            reservation();
        });


    });



})();