// var an = +prompt("enter any number")
// var i= 0
// while(i<= 10){
// document.write(an+" X "+ i+"=" +  an * i+"<br>")
// i++
// }

// var a = +prompt("number....")
// var b = 1;
// do{
//     document.write(a + "x" + b+  "=" + a * b )
//     b++;
// }while(b<=10)

// function nameeee(ali){
//     alert(ali)
// }

// function che(){
//     alert("You are fail")
// }



// function ddd(){
//     var ok= document.getElementById("dd")
//     alert(ok.value)

//     ok.value = "chal by apna naam lik"
// }
// ddd()

function getElemtn(){
    // var getss = document.getElementsByTagName('p[2]')
//   console.log(document.childNodes[0])
//   console.log(document.childNodes[0].childNodes[0])
// var a = parentNode.firstChild
//   console.log(a)
//   console.log(document.childNodes[1])
//   console.log(document.childNodes[2])
}
// function fin(){
// var a = document.getElementById("cric")
// var b = document.getElementById("spe")
// var c = document.getElementById("spec")
// var aa = document.getElementById("Ccric")
// var bb = document.getElementById("Cspe")
// var cc = document.getElementById("Cspec")



// aa.src=a.src
// bb.innerHTML=b.innerHTML
// cc.innerHTML=c.innerHTML
// }


// var ccc = document.getElementById("aaa")

//  console.log(ccc.attributes[2].nodeName)


// var p = document.createElement('h1')
// var t = document.createTextNode("This is the main heading")
// var aise = p.appendChild(t)
// console.log(aise)

// var main = document.getElementById("z")
// main.appendChild(aise)

// var pp = document.createElement('p')
// var tt = document.createTextNode("This is the main paragraph")
// console.log(pp.appendChild(tt))
function btN(){ 
var a = document.getElementById('val')
var p = document.createElement('p')
var text = document.createTextNode(a.value)
p.appendChild(text)
var messages = document.getElementById('message')
messages.appendChild(p)

a.value = " "
}