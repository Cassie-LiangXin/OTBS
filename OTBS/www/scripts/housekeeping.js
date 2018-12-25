(function() {
    "use strict";
    var bed=1;
    var towel = 1;
    var sofa = 1;
    var amenity = 1;


    $(document).ready(function () {
        //bed
        $("#addbed").bind("click", function () { 
            bed = bed + 1;
            document.getElementById("bedvalue").value = bed;
        });

        $("#removebed").bind("click", function () {
            bed = bed - 1;
            if (bed <= 0) { bed=1; }
            document.getElementById("bedvalue").value = bed;

        });
        //towel
        $("#addtowel").bind("click", function () {
            towel = towel + 1;
            document.getElementById("towelvalue").value = towel;
        });

        $("#removetowel").bind("click", function () {
            towel = towel - 1;
            if (towel <= 0) { towel = 1; }
            document.getElementById("towelvalue").value = towel;
        });
        //sofa
        $("#addsofa").bind("click", function () {
            sofa = sofa + 1;
            document.getElementById("sofavalue").value = sofa;
        });

        $("#removesofa").bind("click", function () {
            sofa = sofa - 1;
            if (sofa <= 0) { sofa = 1; }
            document.getElementById("sofavalue").value = sofa;
        });
        //amenity
        $("#addamenity").bind("click", function () {
            amenity = amenity + 1;
            document.getElementById("amenityvalue").value = amenity;
        });

        $("#removeamenity").bind("click", function () {
            amenity = amenity - 1;
            if (amenity <= 0) { amenity = 1; }
            document.getElementById("amenityvalue").value = amenity;
        });


        $("#removeamenity").bind("click", function () {
            amenity = amenity - 1;
            if (amenity <= 0) { amenity = 1; }
            document.getElementById("amenityvalue").value = amenity;
        });
        $("#btngolist").bind("click", function () {
            window.location = "viewreservation.html";
        });


    });




})();
