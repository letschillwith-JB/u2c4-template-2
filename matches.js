// write js code here corresponding to matches.html

var array = JSON.parse(localStorage.getItem("schedule"))
var arr_fav = JSON.parse(localStorage.getItem("favourites")) || [];

array.forEach(function (ele){
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

    var fav = document.createElement("td")
    fav.innerText = "Add as Favourites"
    fav.style.color = "green"
    fav.style.cursor= "pointer"
    //appending
    tr.append(td1,td2,td3,td4,td5,fav)
    document.querySelector("tbody").append(tr)

    fav.addEventListener("click",fun2)
    function fun2(){
        event.preventDefault()

        var dataObj1 = {
            match_num : ele.match_num,
            team_a    : ele.team_a,
            team_b    : ele.team_b,
            date      : ele.date,
            venue     : ele.venue,  
          }
          arr_fav.push(dataObj1)
          localStorage.setItem("favourites",JSON.stringify(arr_fav))
          window.location.href="favourites.html"
          console.log(arr_fav)
    }
})