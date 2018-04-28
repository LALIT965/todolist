$(document).ready(function(){
    let todos=[];
      let todolists=$("#todolist");
      let inp=$("#ip");
      let button=$("#btn");
      let savedtodos=localStorage.getItem("todos")
      if(savedtodos){
          todos=JSON.parse(savedtodos)
          console.log(todos)
      }
      button.click(function(){
          let b=inp.val();
          todos.push({
              task:b,
              done:false
           } )
           localStorage.setItem("todos",JSON.stringify(todos))//this statement is used to store the todolist 
           //in the local storage of browser
          let todoitem=$('<li class="list-group-item"></li>')
          let content_div=$('<div class="row"></div>')
          let check=$('<input type="checkbox">').click(function(){
              content_div.css("text-decoration","line-through")
          })
          let task=$(`<div class="col">
          ${b}
       </div>
       `)
       let inpt=$('<div class="col-2 text-center"></div>')
       inpt.append(check)
       content_div.append(inpt).append(task).append($(`<div class="col-1">
       <button><i class="fa fa-chevron-up move icon"></i></button>
       </div>
    <div class="col-1">
       <button><i class="fa fa-chevron-down move icon"></i></button>
    </div>
    
   <div class="col-1">
       <button> <i class="fa fa-times delete"></i></button>
    </div>`))
       todoitem.append(content_div)
       todolists.append(todoitem)

            /*todolists.append(
       
               $(`<li class="list-group-item">
               <div class="row">
               <div class="col-2 text-center">
                   <input type="checkbox" id="">
               </div>
               <div class="col">
                  ${b}
               </div>
               <div class="col-1">
                   <button><i class="fa fa-chevron-up move icon"></i></button>
               </div>
               
               <div class="col-1">
                   <button><i class="fa fa-chevron-down move icon"></i></button>
                </div>
                
               <div class="col-1">
                   <button> <i class="fa fa-times delete"></i></button>
                </div>
           </div>
               
               </li>`)
           )*/ 
        })
}) 