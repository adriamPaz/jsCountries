function changePage1(currentId, nextId){
    let currentCard = document.getElementById(currentId);
    let nextCard = document.getElementById(nextId);  

    currentCard.classList.add("d-none");

    nextCard.classList.remove("d-none");
    
}

function changeBackwards(currentId,pastId){
    let currentCard = document.getElementById(currentId);
    let pastCard = document.getElementById(pastId);

    currentCard.classList.add("d-none");
    pastCard.classList.remove("d-none");

}

function trackScore(){
    let score = 0;
    let result = document.getElementById("finalNumber") ;
    let first = document.getElementById("opt-1-IT")
    if (first.click == true){
        score++
    }
    result.textContent = "{score}";
    result.appendChild(result);

}

h2.textContent = 'Add h2 element to the div';
div.appendChild(h2);