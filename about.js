




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