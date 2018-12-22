(function () {
    "use strict";

    var userid;
    var password;
    var myVar;
    $(document).ready(function () {

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
            //if ($("#LoginForm").valid()) {
            // login();   
            document.getElementById("loader").style.display = "block";
            document.getElementById("front-page").style.display = "none";
            myVar = setTimeout(alert("Login Success"), 1000);

            myVar = setTimeout(window.location = "homepage.html", 1000);
            //}
        });

        $("#btnNewUser").bind("click", function () {
            window.location = "newuser.html";
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


    });

    function login() {
        var url = serverURL() + "/login.php";
        var result;
        userid = $("#txtLogin").val();
        password = $("#txtPassword").val();

        var JSONObject = {
            "userid": userid,
            "password": password
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getLoginResult(arr);
            },
            error: function () {
                validationMsg();
            }
        });
    }

    function _getLoginResult(arr) {
        if (arr[0].result.trim() !== "0") {
            localStorage.setItem("userid", userid);
            localStorage.setItem("password", password);
            validationMsgs("Login OK", "Information", "OK");
            window.location = "me.html";
        }
        else {
            validationMsgs("Error in Username or Password", "Validation", "Try Again");
        }
    }

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


    var slideIndex = 1;
    showSlides(slideIndex);

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
    showlogin();
    showlogin();
    shownewuser();
    currentSlide(1);



})();
