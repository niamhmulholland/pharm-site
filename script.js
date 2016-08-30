<script>
    $(document).ready(function(){
        $(".contact-info").hide();
        $(".service-info").hide();
        $(".photolab-info").hide();

       /*    $(".about").click(function() {
            $(".holder").addClass("image-animate-2");
            console.log("did it-2");
        }); */

       
   /* document.getElementById("container").addEventListener("wheel", myFunction);
        function myFunction() {
            $(".holder").addClass("image-animate");
            console.log("did it");
        }; */

    function headerDesign () {
        $(".header").css("font-size", "18px");
        $(".sub-head").css("font-size", "14px");
    }

    $(".home").click(function(){
        $(".about").show();
        $(".contact-info").hide();
        $(".service-info").hide();
        $(".photolab-info").hide();
       /* $(".holder").addClass("image-animate-2"); */
        $(".header").css("font-size", "60px");
        $(".sub-head").css("font-size", "30px");
        $(".image").css("opacity", "0.5");
    });
     $(".services").click(function(){
        $(".about").hide();
        $(".contact-info").hide();
        $(".service-info").show();
        $(".photolab-info").hide();
        $(".image").css("opacity", "0.5");
        headerDesign();
    });
     $(".photolab").click(function(){
        $(".about").hide();
        $(".contact-info").hide();
        $(".photolab-info").show();
        $(".service-info").hide();
        headerDesign();
        $(".image").css("opacity", "0.2");
    });
      $(".contact").click(function(){
        $(".about").hide();
        $(".contact-info").show();
        $(".photolab-info").hide();
        $(".service-info").hide();
        $(".image").css("opacity", "0.5");
        headerDesign();
    });
      $(".ask").click(function(){
        $(".about").hide();
        $(".contact-info").hide();
        $(".photolab-info").hide();
        $(".service-info").hide();
        $(".image").css("opacity", "0.5");
        headerDesign();
    });
});
</script>