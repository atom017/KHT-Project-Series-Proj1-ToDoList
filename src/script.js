
const button = document.querySelector("#add-btn");
const list = document.querySelector("#list");
const listItems = document.getElementsByClassName("item");
const headerDate = document.getElementById("date");
const clear = document.getElementById("clear");
const input = document.getElementById("input");
const today = new Date();

headerDate.innerHTML = today.toDateString("en-Us");


//Restore Data
let previousList,id;

let data = localStorage.getItem("ToDo");

if(data){
    previousList = JSON.parse(data);
    id = previousList.length;
    lodList(previousList);
}
else{

}

function loadList(prevList){
    prevList.forEach(function(item){

    })
}

//functions

function addItem(todoItem){
    let mynode = document.createElement("li");
    mynode.innerHTML = `
    <i class="fa fa-circle" id = "check"></i>
    <p>${todoItem}</p>
     <i class="fa fa-trash de" id = "delete-btn"></i>
    `;
    
    list.append(mynode);
    deleteItems = document.getElementsByClassName("fa-trash");

}
button.addEventListener("click",(e)=>{
    e.preventDefault();
    const item = document.getElementById("input");
    let text = item.value;
    if(text.length != 0){addItem(text);}
    item.value = '';
   
});

input.addEventListener("keyup",function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        const item = this.value;
        if(item.length != 0){addItem(item);}
        this.value = '';
    }
})

function getClickElement(event){
    let element  = event.target;

    console.log(element.tagName);
    if(element.id== "delete-btn"){
        let li = element.parentNode;
        li.setAttribute("id","delete");
        let deleteLi = list.querySelector("#delete");
        list.removeChild(deleteLi);
    }

    if(element.id == "check"){
        let li = element.parentNode;
        let parentId = li.id;
        if(li.id == "tick"){
            console.log("Already finished");
            li.removeAttribute("id");
            element.setAttribute("class","fa fa-circle");
        }
        else{
         li.setAttribute("id","tick");
         element.setAttribute("class","fa fa-check-circle");
          console.log("finished: ",li);
         
        }
        
    }

    if(element.tagName == "LI"){
        //
       console.log(element.class);
        if(element.id == "tick"){ 
            let childIcon = element.querySelector(".fa-check-circle");
            element.removeAttribute("id");
            childIcon.setAttribute("class","fa fa-circle");
        }
        else{
            
         element.setAttribute("id","tick");
         let childIcon = element.querySelector(".fa-circle");
         childIcon.setAttribute("class","fa fa-check-circle");
        }
        
    }

    if(element.tagName=="P"){
        let li = element.parentNode;
        if(li.id == "tick"){ 
            let childIcon = li.querySelector(".fa-check-circle");
            li.removeAttribute("id");
            childIcon.setAttribute("class","fa fa-circle");
        }
        else{
            
         li.setAttribute("id","tick");
         let childIcon = li.querySelector(".fa-circle");
         childIcon.setAttribute("class","fa fa-check-circle");
        }
    }
    
}

clear.addEventListener("click",(e)=>{
    e.preventDefault();
    list.querySelectorAll("*").forEach( n => n.remove());
})





