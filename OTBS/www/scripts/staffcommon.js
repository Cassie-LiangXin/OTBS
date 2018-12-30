(function () {
    "use strict";

    var staffid;
    var staffpassword;



    $(document).ready(function () {
        // For staff login 
        $("#staffLoginForm").validate({
            messages: {
                staffid: "User ID is required",
                staffpassword: "Password is required",
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

            if ($("#staffLoginForm").valid()) {

                staffid = $("#staffid").val();
                staffpassword = $("#staffpassword").val();

                localStorage.setItem("staffid", staffid);

                window.location = "staffmain.html";
            }
        });

        //binding buttons
        $("#forgetpassword").bind("click", function () {
            window.location = "forgetpassword.html";
        });
        $("#workschedule").bind("click", function () {
            window.location = "staffjoblist.html";
        });
        $("#livechat").bind("click", function () {
            window.location = "stafflivechat.html";
        });
        $("#qrscan").bind("click", function () {
            window.location = "staffqrcode.html";
        });
        $("#btnqrscan").bind("click", function () {
            window.location = "https://webqr.com/";
        });
        $("#chart").bind("click", function () {
            window.location = "staffcharts.html";
        });
        $("#customerhistory").bind("click", function () {
            window.location = "CustomerHistory.html";
        });
        $("#piechart").bind("click", function () {
            window.location = "usagechart.html";
        });
        $("#CustomerHistory4").bind("click", function () {
            window.location = "CustomerHistory4.html";
        });
        $("#CustomerHistory3").bind("click", function () {
            window.location = "CustomerHistory3.html";
        });
        $("#CustomerHistory1").bind("click", function () {
            window.location = "CustomerHistory1.html";
        }); 
        $("#CustomerHistory2").bind("click", function () {
            window.location = "CustomerHistory2.html";
        });
        $("#home").bind("click", function () {
            window.location = "staffcharts.html";
        }); 

    });

})();
