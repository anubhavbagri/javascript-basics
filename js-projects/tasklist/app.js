const form = document.querySelector("#task-form")
const tasklist=document.querySelector(".collection")
const clearbtn= document.querySelector(".clear-tasks")
const filter= document.querySelector("#filter")
const taskinput= document.querySelector("#task")


//load all events
loadEventListeners();

function loadEventListeners() {
    //DOM listener
    document.addEventListener("DOMContentLoad",getTasks);
    //add task form
    form.addEventListener("submit",addtask)
    //remove task event
    tasklist.addEventListener("click",removeTask)
    //clear task listener
    clearbtn.addEventListener('click',clearTasks)
    //filter listener
    filter.addEventListener("keyup",filtertasks)
}

function getTasks() {
    let tasks;
    if(localStorage.getItem(tasks)==null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task) {
        const li = document.createElement("li");
    li.className="collection-item";
    //text node and append
    li.appendChild(document.createTextNode(task));
    //create new link
    const link = document.createElement("a");
    //add class
    link.className="delete-item secondary-content";
    //add icon
    link.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
    //append
    li.appendChild(link);
    //append li to ul
    tasklist.appendChild(li);
    })
}


function addtask(e) {
    if(taskinput.value==""){
        alert("add task");
    }
    const li = document.createElement("li");
    li.className="collection-item";
    //text node and append
    li.appendChild(document.createTextNode(taskinput.value));
    //create new link
    const link = document.createElement("a");
    //add class
    link.className="delete-item secondary-content";
    //add icon
    link.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
    //append
    li.appendChild(link);
    //append li to ul
    tasklist.appendChild(li);

    //storage
    storeTaskinlocalstorage(taskinput.value);

    //clear input
    taskinput.value ="";

    e.preventDefault();
} 

function storeTaskinlocalstorage(task){
    let tasks;
    if(localStorage.getItem(tasks)==null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains("delete-item")) {
        if(confirm("Are you sure you want to delete this task?")) {
        e.target.parentElement.parentElement.remove();
        //remove from localStorage
        removeTaskfromlocalstorage(e.target.parentElement.parent);
    }

    }
}

function removeTaskfromlocalstorage(taskitem) {
    let tasks;
    if(localStorage.getItem(tasks)==null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index) {
        if(taskitem.textContent===task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//clear all tasks

function clearTasks() {
    // tasklist.innerHTML=``;
    
    //loop test
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
    //clear from localStorage
    cleartaskfromlocalstorage();
}

function clearTasksFromlocalStorage(){
    localStorage.clear();
}

function filtertasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  }
  