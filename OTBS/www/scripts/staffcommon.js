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

    });

})();
