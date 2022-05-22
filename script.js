let newTask = document.querySelector('#new-task');
let form = document.querySelector('form ');
let items = document.querySelector('#items ');
let complete_list  = document.querySelector('.complete-list ul');

let createTask =  function(task)
{
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    return listItem;
}
 let addTask = function(event)
 {
     event.preventDefault();
     let listItem= createTask(newTask.value);
     items.appendChild(listItem);
     newTask.value="";
    bindIncompleteItems(listItem,completeTask);
 }
 let completeTask =  function()
 {
     let listItem =  this.parentNode;
     let deletebtn = document.createElement('button');
     deletebtn.innerText = 'Delete';     
     deletebtn.className = 'delete';
     listItem.appendChild(deletebtn);

     let checkbox = listItem.querySelector('input[type="checkbox"]');
     checkbox.remove();
     complete_list.appendChild(listItem);
     bindcompleteItems(listItem,deleteTask);

 }
 let deleteTask= function()
 {
     let listItem=this.parentNode;
     let ul=listItem.parentNode;
     ul.removeChild(listItem);   
 }
 {

 }
 let bindIncompleteItems = function(taskItem,checkboxclick)
 {
     let checkBox = taskItem.querySelector('input[type="checkbox"]');
     checkBox.onchange = checkboxclick;
 }
 let bindcompleteItems = function(taskItem,deleteclick)
 {
     let deleteButton = taskItem.querySelector('.delete');
     deleteButton.onclick = deleteclick;
 }
 form.addEventListener('submit',addTask);