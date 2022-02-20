var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");
function register(){
    x.style.left="-370px";
    y.style.left="25px";
    z.style.left="110px";
}
function login(){
    x.style.left="30px";
    y.style.left="380px";
    z.style.left="0px";
}

function addNewTextarea(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
   
    newNode.classList.add('work-experience');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    let addworkexpobj=document.getElementById("addworkexp");
    let addWork=document.getElementById("work");
    addworkexpobj.insertBefore(newNode,addWork);

}
function addQualification(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
   
    newNode.classList.add('Acadmic-qualification');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    let addqualiob=document.getElementById("AQuali");
    let addqbutton=document.getElementById("qualification");
    addqualiob.insertBefore(newNode,addqbutton);

}
function GenerateCv(){
document.getElementById('NameT1').innerHTML=document.getElementById('nameField').value;
document.getElementById('NameT2').innerHTML=document.getElementById('nameField').value;
document.getElementById('ContactT').innerHTML=document.getElementById('contactField').value;
document.getElementById('AddressT').innerHTML=document.getElementById('AddressField').value;
document.getElementById('EmailT').innerHTML=document.getElementById('EmailField').value;
document.getElementById('LinkedinT').innerHTML=document.getElementById('LinkedinField').value;
document.getElementById('GithubT').innerHTML=document.getElementById('githubField').value;
document.getElementById('ObjectiveT').innerHTML=document.getElementById('objectiveField').value;

let file=document.getElementById('ImageField').files[0];
let reader=new FileReader()
reader.readAsDataURL(file);
reader.onloadend=function(){
    document.getElementById('imgT').src=reader.result;
}

let wes=document.getElementsByClassName("work-experience");
let str=''
for(let e of wes){
    str=str+`<li> ${e.value} <li>`;
}
document.getElementById("WorkT").innerHTML=str;

let AqOb=document.getElementsByClassName("Acadmic-qualification");
let str1=''
for(let e of AqOb){
    str1=str1+`<li> ${e.value} <li>`;
}
document.getElementById("AcadmicT").innerHTML=str1;

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}
function Printcv(){
    window.print();
}




