que = document.getElementById("qeustion") ;
op1 = document.getElementById("op1") ;
op2 = document.getElementById("op2") ;
op3 = document.getElementById("op3") ;
op4 = document.getElementById("op4") ;
btn = document.getElementById("btn") ;
options = document.querySelectorAll("option") ;
url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple" ;


op1.addEventListener("click", checkResults) ;
op2.addEventListener("click", checkResults) ;
op3.addEventListener("click", checkResults) ;
op4.addEventListener("click", checkResults) ;

let i=0 ;
let data ;

async function fetchData(){
    data = await fetch(url) 
    .then((response)=>{
        return response.json() ;
    }).then((resp)=>{
        return resp ;
    });
}

function updateFrame(){

    //update class to only option
    op1.setAttribute("class", "option") ;
    op2.setAttribute("class", "option") ;
    op3.setAttribute("class", "option") ;
    op4.setAttribute("class", "option") ;
    
    //updateing quesion
    que.innerHTML =  data.results[i].question ;
    // putting options in randomized order
    let num = Math.round( Math.random()*5 ) ;
    switch(num) {
        case 0, 1 :
            op1.innerHTML = data.results[i].correct_answer ;
            op2.innerHTML = data.results[i].incorrect_answers[0];
            op3.innerHTML = data.results[i].incorrect_answers[1]; 
            op4.innerHTML = data.results[i].incorrect_answers[2]; 
            break;

        case 2 :
            op2.innerHTML = data.results[i].correct_answer ;
            op1.innerHTML = data.results[i].incorrect_answers[0];
            op3.innerHTML = data.results[i].incorrect_answers[1]; 
            op4.innerHTML = data.results[i].incorrect_answers[2]; 
            break ;
        case 3 :
            op3.innerHTML = data.results[i].correct_answer ;
            op1.innerHTML = data.results[i].incorrect_answers[1]; 
            op2.innerHTML = data.results[i].incorrect_answers[0];
            op4.innerHTML = data.results[i].incorrect_answers[2]; 
            break ;
        case 4 :
            op4.innerHTML = data.results[i].correct_answer ;
            op1.innerHTML = data.results[i].incorrect_answers[2]; 
            op2.innerHTML = data.results[i].incorrect_answers[0];
            op3.innerHTML = data.results[i].incorrect_answers[1]; 
            break ;
        
    }

    i++ ;
}

function checkResults(event){
    let clickedoption = event.target ;
    
    if(clickedoption.innerHTML == data.results[i-1].correct_answer){
        clickedoption.setAttribute("class" , "option correct") ;

    }
    else{
        clickedoption.setAttribute("class" , "option incorrect") ;
        
    }
}


window.onload = ()=>{
    fetchData() ;
}
btn.onclick = ()=>{
    btn.value = "Next" ;    
    updateFrame() ;

}






