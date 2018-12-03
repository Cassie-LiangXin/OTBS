
(function () {
    "use strict";

    $(document).ready(function () {
        $("#btnmakefacilityreservation").bind("click", function () {

            var items;
            var times;
            var txtPN;
            var txtdate;
            var txtNop;


            items = $("#items").val();
            times = $("#times").val();
            txtPN = $("#txtPN").val();
            txtdate = $("#txtdate").val();
            txtNop = $("#txtNop").val();



            localStorage.setItem("items", items);
            localStorage.setItem("times", times);
            localStorage.setItem("txtPN", txtPN);
            localStorage.setItem("txtdate", txtdate);
            localStorage.setItem("txtNop", txtNop);


            window.location = "confirmbooking.html";
        });
    });

})();