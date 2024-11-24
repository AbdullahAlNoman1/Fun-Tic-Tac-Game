let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newBtn");
let msg = document.querySelector(".msg-container");
let mg = document.querySelector("#mg");

let turn0 = true; //player x, player y

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],    
];

boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        //console.log("box was clicked")
        //box.innerText ="ABC"
        if(turn0){// player O
           box.innerText = "O";
           box.classList.add("playerO");
           turn0 = false;
           

        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled= true;

        checkWinner();
    });
});

const checkWinner = () =>{
    for(let pattern of winPatterns){
       // console.log(pattern)
       //console.log(pattern[0], pattern[1], pattern[2]);
       //console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
       
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;

       if(pos1Val != "" &&  pos2Val != "" &&  pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
           //console.log("Game winner", pos1Val);
            showWinner(pos1Val);
        }
       }
    
    }
};
const showWinner =(winner)=>{
    mg.innerText = `Congratulation winner is ${winner}`;
    msg.classList.remove("hide")
    disabledBoxes();
 }

const disabledBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msg.classList.add("hide")
    }
}
const resetGame = () =>{
    turn0 = true
    enabledBoxes();
}

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
