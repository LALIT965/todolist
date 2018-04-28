//in this code we will write Modular code i.e MVC model view controller which means that we keep a check of the things that 
//change and other things accordingly. We keep the data of todolist in Model and re render the view every time we refresh the things
//first step is to get the data from local storage and check for the local storage 
// second step is to make list of the data retrieved from the local storage
//Next step is to add the current data to the model and recreate the todolist
//in this particular code we write function to do everything 
//Practise function splice,filter,reduce
let todos=[]
let todolists;
$(document).ready(function()
{
    let button=$('#btn');
     todolists=$('#todolist');
    let value =$('#ip');
    let delet=$('#del');
    refreshtodo(true);
    delet.click(function(){
        todos=[];
          refreshtodo();
    })
    
    button.click(function(){
    
        let b=value.val();
        if(b==""){
            console.log('hello')
            alert('Please enter a todo');
            refreshtodo();

        }else{

        addtodo(b);
        value.val(" ");
        }
    })
}) 
function refreshtodo(firstpage=false){
    if(!firstpage){
        savetodo();
    }
  
    todolists.empty();
    retrievetodo();
    for (i in todos){
        let todoitem=createtodoitem(+i);

    }
} 
function retrievetodo(){
    let savedtodos=localStorage.getItem("todos");
if(savedtodos){
    todos=JSON.parse(savedtodos);
}
}
function moveup(todoid){ 
    // todos.splice(todoId - 1, 0, todos.splice(todoId, 1)[0]);        
      todos.splice(todoid-1,0,todos[todoid]);
      todos.splice(todoid+1,1);
    refreshtodo();
}

function movedown(todoId){ 
     todos.splice(todoId + 1, 0, todos.splice(todoId, 1)[0]);
   
      refreshtodo();
    //
 }
 
function remove(todoId){
    todos.splice(todoId, 1);
  refreshtodo();

    //
 }
function createtodoitem(i){
    let todoitem=$('<li class="list-group-item list-group-item-success"></li>')
          let content_div=$('<div class="row"></div>')
          let check=$('<input type="checkbox">').click(function(){
             // content_div.css("text-decoration","line-through")
              todos[i].done= !todos[i].done;
            //  savedtodos();
              refreshtodo();
          })
          if(todos[i].done){
            content_div.css("text-decoration","line-through")
              check.prop("checked","true");
          }
          let task=$(`<div class="col">
          ${todos[i].task}
       </div>
       `)
       let inpt=$('<div class="col-2 text-center"></div>')
       inpt.append(check)
       
    let iconup=$(`<div class="col-1">
    <button><i class="fa fa-chevron-up "></i></button>
    </div>`).click(()=>{
        moveup(i);
    });
    let icondown=$(` <div class="col-1">
    <button><i class="fa fa-chevron-down "></i></button>
 </div>`).click(()=>{
     movedown(i);
 });
 let iconremove=$(` <div class="col-1">
 <button> <i class="fa fa-times delete"></i></button>
</div>`).click(()=>{
    remove(i);
});
content_div.append(inpt).append(task).append(iconup).append(icondown).append(iconremove)
       todoitem.append(content_div)
       todolists.append(todoitem)
}
function savetodo(){
    localStorage.setItem("todos",JSON.stringify(todos));
  
}
function addtodo(tasks){
   todos.push({
       task:tasks,
       done:false
   })
   //savetodo();
   refreshtodo();
   
}
