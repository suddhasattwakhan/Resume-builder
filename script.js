function addNewWEField(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute("rows",5);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here")
    
    let weob= document.getElementById("we");
    let weAddButtonOb= document.getElementById('weAddButton');

    weob.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.setAttribute("rows",5);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here")
    
    let aqob= document.getElementById("aq");
    let aqAddButtonOb= document.getElementById('aqAddButton');

    aqob.insertBefore(newNode,aqAddButtonOb);
}

//generating cv

function generatecv(){
    // console.log("Generate cv");

    let namefield = document.getElementById('Namefield').value;
    let nameT1= document.getElementById('nameT1');
    nameT1.innerHTML= namefield;

    document.getElementById('nameT2').innerHTML= namefield;

    document.getElementById('contactT').innerHTML= document.getElementById('Contactfield').value;
    document.getElementById('addressT').innerHTML= document.getElementById('Addressfield').value;
    document.getElementById('fbT').innerHTML= document.getElementById('Fbfield').value;
    document.getElementById('instaT').innerHTML= document.getElementById('Instafield').value;
    document.getElementById('linkedT').innerHTML= document.getElementById('Linkedfield').value;

    //objective
    document.getElementById('objectiveT').innerHTML= document.getElementById('objective').value;
  //we
    let wes= document.getElementsByClassName('weField');
    let str=""; 
    for(let e of wes)
    {
        str= str+`<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML= str;
    //aq
    let aqs= document.getElementsByClassName('aqField');
    let str1=""; 
    for(let e of aqs)
    {
        str1= str1+`<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML= str1;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';


}


function printCV(){
    window.print();
}