function addToList() {

    var taskName = document.getElementById('taskName').value
    var todoDiv = document.getElementById('myToDo')

    var newToDoitem = document.createElement('div')

    var toDoName = document.createElement('li')
    toDoName.innerHTML = taskName
    var deleteBtn = document.createElement('i')
    deleteBtn.classList.add('far')
    deleteBtn.classList.add('fa-trash-alt')

    newToDoitem.appendChild(toDoName)
    newToDoitem.appendChild(deleteBtn)

    todoDiv.appendChild(newToDoitem)

}
var todoDiv = document.getElementById('myToDo')
todoDiv.addEventListener('click' , deleteitem )

function deleteitem(e) 
{
    const element = e.target

    if(element.classList[0] == 'far')
    {
        element.parentElement.remove()
    }
}