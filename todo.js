window.onload=function(){
let bttn=document.getElementById('btn');
let inp=document.getElementById('inp');
let todo=document.getElementById('list');
 

bttn.onclick=function(){
     let b  =inp.value;
     if (b===''){
      window.alert('Enter a todo');
     }
     else{
         let check=document.createElement('input');
        let li=document.createElement('li');
        //font awesome element up angle 
        let up=document.createElement('i');
        //font awesome for down angle
        let dw=document.createElement('i');
        //font for delete
        let d=document.createElement('i');
        d.setAttribute('class','fas fa-trash-alt');
        //set class of awesome
        dw.setAttribute('class','fas fa-angle-down');
        check.setAttribute('type','checkbox');
        check.setAttribute('id','chek')
        // set class of down
        up.setAttribute('class','fas fa-angle-up');
        li.setAttribute('class','list-group-item list-group-item-success');//list created 
        li.appendChild(check); 
        li.appendChild(document.createTextNode(b));
        li.appendChild(up);
        li.appendChild(dw);
        li.appendChild(d);
        todo.appendChild(li);


     }
}
}
// jquery is a library which have many functions writtten in javascript given to us.
//it is not necessary to use jquery as whatever is possible in jquery we can do it with normal javascript as well
//to select any element using selectors we use ('#id'),('.class') or (element)i.e div,li,ul
// to change the css we use ('#or.or element').css('propertyname','value')
//to use click ('#or.or element').click(function(){});
// .attr()->it is used to get the value of the attributess and .prop()
//block chaining is an important property .As it helps in reducing DOM traversals. 
//.min stands for minified or minify files...it is used to create a compressed 
// type version of code with which user has no interest in link.
//In jQuery every function returns a (this) ....When we set something then 'this' is returned  
//and when we get a value then jquery object is returned and in this case blockchaining cannot be used.   
$(document).ready(function(){

    $('#btn').click(function(){
      //  $('div').css('background-color','blue');
        console.log($('#chek').prop("checked"));
    
    })
    // to get hte value of the attributees for example..data-id=5
    console.log($('#btn').attr("data-id"));
    //.prop is used to get value of checkbox
    //by using the .prop() we get the value of box whether it is checked or unchecked.
    console.log($('#chek').prop("checked"));
    //blockchaining
    $('#div').css("height","800px").append("hello");
    
    }) 