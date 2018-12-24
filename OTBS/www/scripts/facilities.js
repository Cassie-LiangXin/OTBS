
(function () {
    "use strict";
    var button;
    var link;
    $(document).ready(function () {
        $("#gotocontactus").bind("click", function () {

            window.location = "contactus.html";
        });

        $("#facilityformcheck").bind("click", function () {
            alert();
            button = document.getElementById("facilityformcheck");
            link = document.getElementById("facilitydialoglink");
            button.style.display = "block";
            link.style.display = "none";
        });
    });

})();