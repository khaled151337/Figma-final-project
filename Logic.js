let Skill = document.querySelector(".skill_btn");
let EduButton = document.querySelector(".Edu_btn");

let RateMainBox = document.querySelector(".rate_main_box");
let EDUCATION = document.querySelector(".EDUCATION");

Skill.addEventListener('click', function(){
    EDUCATION.style.display = "none";
    RateMainBox.style.display = "block";

    Skill.style.border = "2px solid black";
    EduButton.style.border = "2px solid transparent";
});

EduButton.addEventListener('click', function(){
    EDUCATION.style.display = "block";
    RateMainBox.style.display = "none";

    Skill.style.border = "2px solid transparent";
    EduButton.style.border = "2px solid black";
});

//nav start





  
    function myFunction(){
        let marginLeft = window.document.documentElement.clientWidth;
        let marginTop = window.document.documentElement.clientHeight;
        let test = window.document.documentElement.scrollTop;
        let backButton = document.querySelector('.back');
        if(test > 100){
            backButton.style.display = "block";
        }else{
            backButton.style.display = "none";
        }
        backButton.style.visibility = "visible"
        backButton.style.marginTop = `${marginTop - 400}px`;
        backButton.style.marginLeft = `${marginLeft - 100}px`
    }

    let interButton = setInterval(myFunction, 1000);
  
    
   

    // window.addEventListener('orientationchange', function(){
    //     this.location.reload();
    // });

//nav end


let ofcanvasItem = document.querySelectorAll(".off_cus");

ofcanvasItem.addEventListener("click", function(){
    ofcanvasItem.style.backgroundColor = "#FFCC00";
});
      