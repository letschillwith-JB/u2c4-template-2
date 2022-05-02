// write js code here corresponding to favourites.html

var rrr = JSON.parse(localStorage.getItem("favourites"))
rrr.forEach(function (ele){
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText = ele.match_num

    var td2 = document.createElement("td")
    td2.innerText = ele.team_a

    var td3 = document.createElement("td")
    td3.innerText = ele.team_b

    var td4 = document.createElement("td")
    td4.innerText = ele.date

    var td5 = document.createElement("td")
    td5.innerText = ele.venue

    var del = document.createElement("td")
    del.innerText = "Delete"
    del.style.color = "red"
    del.style.cursor = "pointer"

    tr.append(td1,td2,td3,td4,td5,del)
    document.querySelector("tbody").append(tr)

    del.addEventListener("click",fun3)
    function fun3(){
        td1.innerText =""   ;
        td2.innerText =""
        td3.innerText =""
        td4.innerText =""
        td5.innerText =""
     
        localStorage.removeItem("favourites")
    }
    
})

//site deploy is still in progress so i will upload soon okk byee
