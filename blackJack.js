let gameSt=document.getElementById('game-st');
let cardsEl=document.getElementById('cards-el');
let sumEl=document.getElementById('sum-el');
let playerInf=document.getElementById('player-inf');
let player={
    name:'yousef',
    cash:0
};
playerInf.textContent=`${player.name} 0$`;

let cards=[];
let sum
let isAlive=false;
let haveBlackjack=false;



// FUNC 1
function startgame(){
    // حطينا التعاريف هدول هون كلهم مشان لما نكبس ستارت يضل يعطي قيم جديده
    let card1=getcard()
    let card2=getcard()
    cards=[card1,card2];
    sum=card1+card2;
    isAlive=true;
    haveBlackjack=false;
    rendergame()
};

// FUNC2
function rendergame(){
    // حطيتها جو لاصفر قيمة cardsEL  عشان ما يكتبها مرتين***************************

    cardsEl.textContent='cards: ' 
    sumEl.textContent = 'sum: ' + sum;

    for(let i=0; i< cards.length;i++){
       
    cardsEl.textContent +=cards[i]+" "
    }
    if(sum<21){
        gameSt.textContent='Do you want to draw a new card?'
    }
    else if(sum===21){
        gameSt.textContent='♣️You have got a blackjack♣️';
        haveBlackjack=true;
        player.cash +=100;
        playerInf.textContent=`${player.name} ${player.cash}$`;
    }
    else{
        gameSt.textContent='GameOver☹️';
        isAlive=false
    }
};
// FUNC3
function newcard(){
   
    if(haveBlackjack===false && isAlive===true){
      let card3=getcard();
      cards.push(card3);
      sum +=card3;
      rendergame();

    }
    

}
// FUNC4
function getcard(){
    let randomNum=Math.floor(Math.random()*13)+1;
    if(randomNum>10){
        randomNum=10
    }
    else if(randomNum===1){randomNum=11}
    return randomNum
}

