(function () {
    "use strict";

    //set variables
    var userid= localStorage.getItem("userid");
    var password=localStorage.getItem("password");
   
    $(document).ready(function () {


  

        //bind button
        $("#btnlogout").bind("click", function () {
            window.location = "index.html";
        });

        $("#direction").bind("click", function () {
            window.location = "direction.html";
        });

        $("#shuttle").bind("click", function () {
            window.location = "shuttle.html";
        });

        $("#notification").bind("click", function () {
            window.location = "notification.html";
        });

        $("#btnNews").bind("click", function () {
            window.location = "news.html";
        });
        $("#customerlivechat").bind("click", function () {
            window.location = "customerlivechat.html";
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
        //Javascript for side navigation bar
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

        //set variables
        var myVar;

        //Timmer function
        function myFunction() {

            myVar = setTimeout(showPage, 1000);
        }

        //Loader function
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