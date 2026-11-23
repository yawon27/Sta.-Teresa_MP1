
$(document).ready(function(){
    const slider = document.getElementById("slider");
    if(slider){
        const slides = slider.querySelectorAll("img");
        let current = 0;

        function showSlide(index) {
            slides[current].classList.remove("active");
            current = (index + slides.length) % slides.length; 
            slides[current].classList.add("active");
        }

        slider.querySelector(".next").addEventListener("click", () => showSlide(current + 1));
        slider.querySelector(".prev").addEventListener("click", () => showSlide(current - 1));
    }
    /**/

    $("#moreBreads").click(function(){
        $("#breadss2").slideToggle(1000);
        if($("#moreBreads").text() == "More!"){
            $("#moreBreads").text("Less!");
        }else{
            $("#moreBreads").text("More!");
        }
    });

    $(".imgChoice").click(function(){
        $(".imgChoice").removeClass("selected");
        $(this).addClass("selected");

        $("#mainImg").attr("src", $(this).attr("src") );
    });

    $("#referenceSlide").click(function(){
        $(".references").slideToggle(1000);
    })

    $("#submitted").click(function(){
        alert("Your feedback has been received, thank you.");
    })

    


});


