var div = document.getElementById("safch");
var oui = document.querySelector("#oui");
var non = document.querySelector("#non");
var nome = document.querySelector("#name");
var msg = document.querySelector("#msg");
var sub = document.querySelector("#sub");
var slct = document.getElementById("selct")

var exp = new RegExp('^[A-Za-z]+$');
var checkRgexp=false;
nome.onkeyup = function(){
    if(exp.test(nome.value)  == true)
    {
      msg.innerText="le nome est validé";
      checkRgexp=true;
    }
    else
    {
        msg.innerText="le nome est non validé";
        checkRgexp=false;
    }
}

var chekingselect=false;

slct.onclick = function (){
    if(slct.selectedIndex !=0)
    {
        console.log("thiscis regexp 1 "+ exp.test(nome.value) );
        chekingselect = true;
    }
    if(slct.selectedIndex == 0)
    {
        
        console.log("this is regexp 2 "+ exp.test(nome.value) );
        chekingselect=false;
    }
}

sub.addEventListener("click",function(e){
    if(chekingselect==false || checkRgexp==false)
     {
        e.preventDefault();
     }
});

// selection affichage / cachée
oui.onchange = function(){

    if(oui.checked){
        div.style.display="block";
    }
}

non.onchange = function(){

    if(non.checked){
        div.style.display="none";
    }
}


