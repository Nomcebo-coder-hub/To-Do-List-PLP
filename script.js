(() => {
    let toDoListArray = [];

    const form = document.querySelector(".form");
    const input = form.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let itemId = String(Date.now());
        let toDoItem = input.value;
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        input.value = "";
    });

    
}