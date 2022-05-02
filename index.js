// write js code here corresponding to index.html
// You should add submit event on the form

var arr = JSON.parse(localStorage.getItem("schedule")) || [];

document.querySelector("#masaiForm").addEventListener("submit",fun1)
function fun1(){
    event.preventDefault();
    var dataObj = {
      match_num : document.querySelector("#matchNum").value,
      team_a    : document.querySelector("#teamA").value,
      team_b    : document.querySelector("#teamB").value,
      date      : document.querySelector("#date").value,
      venue     : document.querySelector("#venue").value,  
    }
    arr.push(dataObj)
    localStorage.setItem("schedule",JSON.stringify(arr)) 
    console.log(arr)
    window.location.href="matches.html"
}
