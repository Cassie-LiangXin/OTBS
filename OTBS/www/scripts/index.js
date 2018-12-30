(function () {
    "use strict";
    //set variables
    var userid;
    var password;
    var checkinsatus;
    var myVar;
    var slideIndex = 1;


    $(document).ready(function () {
        // For login 
        $("#LoginForm").validate({
            messages: {
                txtLogin: "User ID is required",
                txtPassword: "Password is required",
            },
            focusInvalid: false,
            submitHandler: function () {
                return false;
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().parent().after());
            },

        });

        $("#btnLogin").bind("click", function () {
            if ($("#LoginForm").valid()) {
                userid = $("#createname").val();
                password = $("#txtPassword").val();
                checkinsatus = $("#checkinstatus").val();
             
                localStorage.setItem("userid", userid);
                localStorage.setItem("password", password);
                localStorage.setItem("checkinsatus", checkinsatus);
                window.location = "homepage.html";
              // alert(checkinsatus);
            }
        });
        // End login
        // For bind button

        $("#btnNewUser").bind("click", function () {
            window.location = "newuser.html";
        });
        $("#stafflogin").bind("click", function () {
            window.location = "stafflogin.html";
        });
         $("#forgetpassword").bind("click", function () {
            window.location = "forgetpassword.html";
        });

        $("#btnshowlogin").bind("click", function () {
          
            document.getElementById("showloginform").style.display = "block";
            document.getElementById("shownewuserform").style.display = "none";
          
        });

        $("#btnshownewuser").bind("click", function () {
            document.getElementById("shownewuserform").style.display = "block";
            document.getElementById("showloginform").style.display = "none";
        });

        $("#minusSlides").bind("click", function () {
            plusSlides(-1);
        });

        $("#plusSlides").bind("click", function () {
            plusSlides(1);
        });

        $("#Slides1").bind("click", function () {
            currentSlide(1);
        });

        $("#Slides2").bind("click", function () {
            currentSlide(2);
        });

        $("#Slides3").bind("click", function () {
            currentSlide(3);
        });

        showSlides(slideIndex);
        showlogin();
        showlogin();
        shownewuser();
        currentSlide(1);

    });



    function showlogin() {
        var showlogin = document.getElementById("showloginform");
        if (showlogin.style.display === "none") {
            showlogin.style.display = "block";
        } else {
            showlogin.style.display = "none";
        }
    }

    function shownewuser() {
        var shownewuser = document.getElementById("shownewuserform");
        if (shownewuser.style.display === "none") {
            shownewuser.style.display = "block";
        } else {
            shownewuser.style.display = "none";
        }
    }

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {

        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    //excute on start


})();
