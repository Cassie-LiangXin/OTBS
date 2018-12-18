﻿(function () {
    "use strict";

    var userid;
    var password;
  
    $(document).ready(function () {
  
        $("#LoginForm").validate({
            messages: {
                txtLogin: "User Id is required",
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
                //login();
               // window.location = "homepage.html";
                var x = "13";
                var y = "17";
                var a = parseInt(x);
                var b = parseFloat(y);
                if (isNaN(a)) {
                    alert("not a number");
                }
                else {
                    if (a + a > 13) {
                        alert(x + x);
                    }
                }
                alert(b + b);
            }
        });

        $("#btnNewUser").bind("click", function () {
            window.location = "newuser.html";
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
        }
        else {
            validationMsgs("Error in Username or Password", "Validation", "Try Again");
        }
    }
} )();