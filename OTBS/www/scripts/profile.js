(function () {
    "use strict";
    //set 10 variables
    var userid="peter";
    var firstname = "Peter";
    var lastname = "Lim";
    var description = "I find myself to be a nice person with likeable qualities. I normally book chalets to celebrate special ocassions, such as friends and families birthdays.";
    var DOB = "2000-01-01";
    var email = "xyz@mail.com";
  


    $(document).ready(function () {

        //show 10 variables
        document.getElementById("userid").value = userid;
        document.getElementById("firstname").value = firstname;
        document.getElementById("lastname").value = lastname;
        document.getElementById("description").value = description;
        document.getElementById("DOB").value = DOB;
        document.getElementById("email").value = email;

        $("#profile").bind("click", function () {
            userid = $("#userid").val();
            firstname = $("#firstname").val();
            lastname = $("#lastname").val();
            description = $("#description").val();
            DOB = $("#DOB").val();
            email = $("#email").val();
            $('#updatedprofile').append("<br>"
                + "Userid:  "
                + userid + "<br>"
                + firstname + ""
                + lastname + "<br>"
                + "description:  "
                + description + "<br>"
                + "DOB="
                + DOB + "<br>"
                + "email="
                + email + "<br>"
        + "<button onclick='window.location=&quot;deleteitem.html?itemid=" + arr[i].itemID + "&quot;'>Delete Item</button>"
                + "<hr>"
            );
            //window.location = "homepage.html";
        });
    });


})();