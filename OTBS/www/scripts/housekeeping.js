(function() {
    "use strict";
    //set variables
    var bed=0;
    var towel = 0;
    var sofa = 0;
    var amenity = 0;
    var breakfast = 0;
    var lunch = 0;
    var dinner = 0;
 var checkinsatus = localStorage.getItem("checkinsatus");
    //bind button
    $(document).ready(function () {
        //Condition statement, options avilable to user based on check-in condition 
       
        if (checkinsatus === "notcheckedin") {
            document.getElementById("roommakeupsetdiv").style.display = "none";
            document.getElementById("breakfastsetdiv").style.display = "none";
            document.getElementById("lunchsetdiv").style.display = "none";
            document.getElementById("dinnersetdiv").style.display = "none";
        }
        //bed
        $("#addbreakfast").bind("click", function () {
            breakfast = breakfast + 1;
            document.getElementById("breakfastvalue").value = breakfast;
        });

        $("#removebreakfast").bind("click", function () {
            breakfast = breakfast - 1;
            if (breakfast <= 0) { breakfast = 0; }
            document.getElementById("breakfastvalue").value = breakfast;

        });


        //bed
        $("#addlunch").bind("click", function () {
            lunch = lunch + 1;
            document.getElementById("lunchvalue").value = lunch;
        });

        $("#removelunch").bind("click", function () {
            lunch = lunch - 1;
            if (lunch <= 0) { lunch = 0; }
            document.getElementById("lunchvalue").value = lunch;

        });

        //bed
        $("#adddinner").bind("click", function () {
            dinner = dinner + 1;
            document.getElementById("dinnervalue").value = dinner;
        });

        $("#removedinner").bind("click", function () {
            dinner = dinner - 1;
            if (dinner <= 0) { dinner = 0; }
            document.getElementById("dinnervalue").value = dinner;

        });




        //bed
        $("#addbed").bind("click", function () {
            bed = bed + 1;
            document.getElementById("bedvalue").value = bed;
        });

        $("#removebed").bind("click", function () {
            bed = bed - 1;
            if (bed <= 0) { bed = 0; }
            document.getElementById("bedvalue").value = bed;

        });


        //towel
        $("#addtowel").bind("click", function () {
            towel = towel + 1;
            document.getElementById("towelvalue").value = towel;
        });

        $("#removetowel").bind("click", function () {
            towel = towel - 1;
            if (towel <= 0) { towel = 0; }
            document.getElementById("towelvalue").value = towel;
        });
        //sofa
        $("#addsofa").bind("click", function () {
            sofa = sofa + 1;
            document.getElementById("sofavalue").value = sofa;
        });

        $("#removesofa").bind("click", function () {
            sofa = sofa - 1;
            if (sofa <= 0) { sofa = 0; }
            document.getElementById("sofavalue").value = sofa;
        });
        //amenity
        $("#addamenity").bind("click", function () {
            amenity = amenity + 1;
            document.getElementById("amenityvalue").value = amenity;
        });

        $("#removeamenity").bind("click", function () {
            amenity = amenity - 1;
            if (amenity <= 0) { amenity = 0; }
            document.getElementById("amenityvalue").value = amenity;
        });


        $("#btngolist").bind("click", function () {
            window.location = "viewreservation.html";
        });


    });




})();
