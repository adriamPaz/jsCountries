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
    
}