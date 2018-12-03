(function () {
    "use strict";

    $(document).ready(function () {
        var items;
        var times;
        var txtPN;
        var txtdate;
        var txtNop;

        items = localStorage.getItem("items");
        times = localStorage.getItem("times");
        txtPN = localStorage.getItem("txtPN");
        txtdate= localStorage.getItem("txtdate");
        txtNop = localStorage.getItem("txtNop");


        $("#items").html("Dear customer you have successfully reserved items" + items);
        $("#times").html("and" + times);
        $("#txtPN").html("and" + txtPN);
        $("#txtdate").html("and" + txtdate);
        $("#txtNop").html("and" + txtNop);

    });

})();