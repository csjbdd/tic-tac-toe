
debugger;
// 변수 선언 안바뀌는 변수는 const로 선언한다.
const strBtn = document.getElementById("start");
const field = document.getElementById("field");
const header = document.getElementById("header");
const node = document.getElementsByClassName("yeol");
// 값이 바뀌는 변수 이기때문에 let 으로 선언 
let turn = "O";
let color = "#000000";
let cnt = 0;
/* JS 유사배열 
getElementsByClassName 나 getgetElementById 로 가져 오는건 htmlCollection 이고
querySelectorAll 로 가져오면 nodelist로 가져온다.
이 둘은 ArrayList랑 다르며 메소드 제한이 있음.
nodelist 사용 가능한 메소드
entries()
forEach()
item()
keys()
values()
htmlCollection 사용 가능한 메소드
item()
*/

//중복체크 검사
for(let i=0;i<node.length;i++) {
    node[i].addEventListener("click",function(e) {
        if (e.target.textContent == "") {
            draw(e);
        }
        else {
            alert("이미 선택 하였습니다.");
        }
    });
};


strBtn.addEventListener("click", function() {
    strBtn.style.display = "none";
    field.style.visibility = "visible";
    field.classList.add("field-visible");
    header.innerText=turn + "차례 입니다.";
});

const draw = (e) => {
    e.target.textContent = turn;
    e.target.style.color = color;
    e.target.style.backgroundColor = "rgb(247, 254, 122)";

    // draw 먼저하고 승패 체크를 위해 비동기처리 
    setTimeout(() => {
        winnerCheck(e);
    }, 100);
};


const winnerCheck = (e) => {debugger;
    cnt++;
    // 가로 체크
    widthResult =    e.target.textContent == node[0].textContent && e.target.textContent == node[1].textContent && e.target.textContent == node[2].textContent || 
                     e.target.textContent == node[3].textContent && e.target.textContent == node[4].textContent && e.target.textContent == node[5].textContent || 
                     e.target.textContent == node[6].textContent && e.target.textContent == node[7].textContent && e.target.textContent == node[8].textContent ;  
    // 세로체크
    heightResult =   e.target.textContent == node[0].textContent && e.target.textContent == node[3].textContent && e.target.textContent == node[6].textContent || 
                     e.target.textContent == node[1].textContent && e.target.textContent == node[4].textContent && e.target.textContent == node[7].textContent || 
                     e.target.textContent == node[2].textContent && e.target.textContent == node[5].textContent && e.target.textContent == node[8].textContent ;
    // 대각선체크
    diagonalResult = e.target.textContent == node[0].textContent && e.target.textContent == node[4].textContent && e.target.textContent == node[8].textContent || 
                     e.target.textContent == node[2].textContent && e.target.textContent == node[4].textContent && e.target.textContent == node[6].textContent ;
                     
    if (widthResult || heightResult || diagonalResult ) {
        reset = confirm(turn+"님이 승리 하셨습니다 다시 하시겠습니까?");
        if(reset == true) {
            location.reload();
        }
        return;
    }
    
    turn == "O" ? turn = "X" : turn = "O"; 
    color == "#000000" ? color = "#ffffff" : color = "#000000";
    header.innerText=turn + "차례 입니다.";
    

    
    if(cnt == 9){
    
            reset = confirm("무승부 입니다. 다시 하시겠습니까?");
            if(reset == true) {
                location.reload();
            }
    }
    
};


