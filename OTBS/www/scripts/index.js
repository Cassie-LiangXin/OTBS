(function () {
    "use strict";

    var userid;
    var password;

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
            window.location = "homepage.html";
            //}
        });

        $("#btnNewUser").bind("click", function () {
            window.location = "newuser.html";
        });

        $("#btnshowlogin").bind("click", function () {
          
            document.getElementById("showloginform").style.display = "block";
            document.getElementById("shownewuserform").style.display = "none";
          
        });

        $("#btnshownewuser").bind("click", function () {
            document.getElementById("shownewuserform").style.display = "block";
            document.getElementById("showloginform").style.display = "none";
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

    showlogin();
    shownewuser();
})();