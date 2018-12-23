(function () {
    "use strict";
    var userid= localStorage.getItem("userid");
    var password=localStorage.getItem("password");
    var checkinsatus=localStorage.getItem("checkinsatus");
    $(document).ready(function () {



        if (checkinsatus === "notcheckedin") {
            document.getElementById("option4").style.display = "none";
            document.getElementById("option4text").style.display = "none";
        }



        $("#btnNews").bind("click", function () {
            window.location = "news.html";
        });

        $("#btnReservation").bind("click", function () {
            gotoreservationlist();
        });
        $("#btnreservelist").bind("click", function () {
            window.location = "viewreservation.html";
        });
        $("#sidebarSettingopen").bind("click", function () {
            openNav();
        });

        $("#sidebarSettingclose").bind("click", function () {
            closeNav();
    

        });

        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
        function openNav() {
            document.getElementById("mySidenav").style.width = "180px";
            document.getElementById("main").style.marginLeft = "180px";
        }

        /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }

        var myVar;

        function myFunction() {

            myVar = setTimeout(showPage, 1000);
        }

        function showPage() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("homepage").style.display = "block";
        }
        myFunction();
        showSlides(slideIndex);
    showlogin();
    showlogin();
    shownewuser();
    currentSlide(1);
    });

  
})();