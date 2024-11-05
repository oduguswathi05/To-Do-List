const inputElement = document.querySelector("#todo-input") as HTMLInputElement;
const newTodoEl = document.querySelector("#new-todo") as HTMLElement;
interface Todo {
  title: string;
  status: boolean;
}

let newTodo: Todo[] = [];

inputElement.addEventListener("keypress", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    newTodo.push({ title: inputElement.value, status: false });
    renderNewTodo(newTodo);
  }
});

function renderNewTodo(newTodoLi: Todo[]) {
  let innerHTML = "";
  newTodoLi.forEach((n) => {
    innerHTML += `<div>
                      <input type="checkbox" class="check">${n.title}
                  </div>`;
  });

  newTodoEl.innerHTML = innerHTML;
}


