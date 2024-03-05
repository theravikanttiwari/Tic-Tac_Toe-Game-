let boxes =document.querySelectorAll(".box");
let restbtn = document.querySelector("#rest-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;
let count = 0;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const restGame = () => {
    turno = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click",() => {

      if (turno) {
        box.innerText = "0";
        turno = false;
      } else {
        box.innerText = "x";
        turno = true;
       }
       box.disabled = true;
       count++;
       let isWinner =checkWinner();
       if(count === 9 && ! isWinner) {
        gamedraw();

       }
    });
});
const gameDraw = () => {
    msg.innerText ='game was a draw.';
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText='congratulations, winner is ${winner}';
    msgContainer.classList.remove("hide");
  disableBoxes();
};



const checkWinner = () => {
    for(let pattern of winpatterns) {
              let pos1val = boxes[pattern[0]].innerText;
              let pos2val = boxes[pattern[1]].innerText;
              let pos3val = boxes[pattern[2]].innerText;
             
              if(pos1val != ""&& pos2val != ""&& pos3val != "") {
                if(pos1val === pos2val && pos2val === pos3val) {
                    
                    showWinner(pos1val);
                    return true;
                }
              }
    }

};
newGameBtn.addEventListener("click" ,restGame);
restbtn.addEventListener("click" ,restGame);

