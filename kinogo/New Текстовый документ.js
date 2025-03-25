let a = document.getElementById('t34')
let a1 = document.getElementById('t33')
let b = document.getElementById('a1')
let c = document.getElementById('t52')
let c1 = document.getElementById('t72')
let c2 = document.getElementById('t73') 
let c3 = document.getElementById('t78')
let d = document.getElementById('t92')
let c4 = document.getElementById('k1')
let c5 = document.getElementById('k2')
let c6 = document.getElementById('k3')
let c7= document.getElementById('k4')

//menu1 1

function fun1() {
  if(a.style.display === 'none'){
    a.style.display = 'block'
 c3.style.display = 'block'
   
  }
  else{
  a.style.display = 'none'
  a1.style.background= '#1a1a1a'
}
//menu2
}
function fun2(){
  if(b.style.opacity ==='1'){
    b.style.opacity = '0'
  }
else{
  b.style.opacity= '1'
}
   b.style.transition= '1.5s'

}
// display div none  menu navigation
function amal(){
  if(c.style.display === 'none'){
    c.style.display = 'block'
    c1.style.display = 'none'
    c2.style.display = ' none'
   c3.style.display = 'block'
  }
  else{
    c.style.display = 'none'
    c1.style.display = 'block'
    c2.style.display = 'block'
 
  }
}
function amal1(){
  if(d.style.display === 'none'){
    d.style.display = 'block'
  }
  else{
    d.style.display = 'none'
  }
}
//menu 3 navigation 

// menu 4 navigation
function amal2(){
  if(c4.style.display==='none'){
    c4.style.display = 'block'
  }
  else{
    c4.style.display = 'none'
  }
}
function amal3(){
  if(c5.style.display === 'none'){
    c5.style.display= 'block'
  }
  else{
    c5.style.display = 'none'
  }
}
//menu 5 navigation
 function amal4(){
  if(c6.style.display === 'none'){
    c6.style.display = 'block'
  }
  else{
    c6.style.display = 'none'
  }
 }
 //menu
 function amal5(){
  if(c7.style.display === 'none')
    c7.style.display = 'block'
   else{
    c7.style.display = 'none'
   }
}



typeof(console.log(1))


