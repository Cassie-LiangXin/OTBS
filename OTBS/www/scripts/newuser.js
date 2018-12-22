(function () {

    var imgNewUserPictureName = "";
    var userid;
    var password;
    var passwordagain;
    var description;
    var email;
    var mynewVar;

    $(document).ready(function () {
        $("#NewUserForm").validate({
            rules: {
                txtNewEmail: {
                    email: true,
                },
                txtNewPasswordAgain: {
                    equalTo: "#createPassword"
                }
            },
            messages: {
                txtNewName: "new user name is required",
                txtNewEmail: "new email address is required and must be of the format a@b.c",
                txtNewPassword: "new password is required",
                txtNewPasswordAgain: "new password again is required and must be the same as new password",
            },
            focusInvalid: false,
            submitHandler: function () {
                return false;
            }, 
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().parent().after());
            },
        });

        $("#btnSelectImg").bind("click", function () {
            capturePhoto();
        });

        $("#btnCreateAccount").bind("click", function () {
            
          
           savenewuser();
        });
    }); 


    //Image Section
 

    //New User Saving Section
    function savenewuser() {
     
        if ($("#NewUserForm").valid()) {
            var profileimage = imgNewUserPictureName;

            userid = $("#createname").val();
            email = $("#createEmail").val();
            password = $("#createPassword").val();
            passwordagain = $("#createPasswordAgain").val();
            description = $("#createdescription").val();
         
       
              
            alert("new account created");
            window.location = "homepage.html";
             

        }
    }




})();