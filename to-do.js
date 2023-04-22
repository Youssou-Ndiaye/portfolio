//array of things to do
const myTodo = [
  {
    name: "start writing",
    dueDate: "2023/01/01",
  },
];
todoAdded();

function addTodo() {
  //this function will run every time the add to do button is pressed

  //step 1 : save the text input data into a variable
  //step 2 : with the push attribute, add the value into the array
  //step 3: loop through the array and add the new variable to it
  //step 4 : display the result on a paragraph created using js
  //step 5 : display the paragraph content in an html div
  const newTodo = document.getElementById("todo");
  const AddedTodo = newTodo.value;
  const dueDate = document.getElementById("date").value;
  const name = document.getElementById("todo").value;
  myTodo.push({
    name: name,
    dueDate: dueDate,
  });
  newTodo.value = "";
  //console.log(AddedTodo);

  todoAdded();
}

function todoAdded() {
  let todoListHtml = "";

  for (let i = 0; i < myTodo.length; i++) {
    const todo = myTodo[i];
    const name = todo.name;
    const dueDate = todo.dueDate;
    const html = `
    <p>${name} ${dueDate}
       <button class='created' onclick='myTodo.splice(${i},1)
       todoAdded()
       '>
        delete
        </button>
       </p> `;

    todoListHtml += html;
  }

  document.querySelector(".container-list").innerHTML = todoListHtml;
}
