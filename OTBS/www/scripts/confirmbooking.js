(function () {
    "use strict";

    $(document).ready(function () {
        //set variables
        var items;
        var times;
        var txtPN;
        var txtdate;
        var txtNop;
        //get variables
        items = localStorage.getItem("items");
        times = localStorage.getItem("times");
        txtPN = localStorage.getItem("txtPN");
        txtdate= localStorage.getItem("txtdate");
        txtNop = localStorage.getItem("txtNop");

        //show variables on html
    
        document.getElementById("items").value = items;

        document.getElementById("times").value = times;

        document.getElementById("txtPN").value = txtPN;

        document.getElementById("txtdate").value = txtdate;

        document.getElementById("txtNop").value = txtNop;
    });

})();