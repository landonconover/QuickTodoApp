
//initial value of todos
let todos = [
    {id:1, text: 'Go Shopping', done: false},
    {id:2, text: 'Finish DGM Homework', done: true},
    {id:3, text: 'Make dinner', done: false},
    {id:4, text: 'Feed the cat', done: false},
    {id:5, text: 'Walk the dog', done: false}
]

const todosUL = document.querySelector('#todoUL');

//take the array of todos, and create HTML elements
//and display them on our page
function renderTodos(todos){
    todosUL.innerHTML = '';

    todos.forEach((todo) => {
        //do stuff once per item in the array

        //create the li element and set it's text to be the value of the todo
        let li = document.createElement('li');
        let todoText = document.createTextNode(todo.text)
        li.append(todoText)

        //create the checkbox
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        //listen for the user to click the checkbox
        checkbox.addEventListener('click', (event) => {
            //toggle the done class
            li.classList.toggle('done')
            //update the todos array
            todo.done = !todo.done
        })
    
        //check to see if the todo is done, if it is: check the box
        if(todo.done) {
            checkbox.setAttribute('checked', true)
            li.setAttribute('class', 'done')
        }
        
        //add the checkbox to the li
        li.prepend(checkbox)
    
        //append the li to the UL in our HTML
        todosUL.append(li)
    })

    console.log(todos)
}

//initial render of todos when the page first loads
renderTodos(todos);

//listen for the form submit event
//select the newTodoForm form
const newTodoForm = document.querySelector('#newTodoForm');

newTodoForm.addEventListener('submit', (event) => {

    //prevent the default event from happening
    event.preventDefault()

    //get the value of the input
    let newTodoInput = document.querySelector('#newTodo');
    let newTodoValue = newTodoInput.value;

    //if the value is empty, don't do anything
    if(newTodoValue === '') {
        return
    }

    //create a new object that can be added to the array
    let newTodoObj = {
        id: todos.length + 1,
        text: newTodoValue,
        done: false
    }

    //add the new object to the todos array
    todos.push(newTodoObj)

    //rerender the todos with our cool function
    renderTodos(todos)

    //clear the input
    newTodoInput.value = '';

})



