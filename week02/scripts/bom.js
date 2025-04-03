const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function createListItem(chapter) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = chapter;
    deleteButton.textContent = "❌";

    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        input.focus();
    });

    li.append(deleteButton);
    return li;
}

button.addEventListener("click", function() {
    if (input.value.trim() !== '') {
        list.append(createListItem(input.value));
        input.value = '';
    }
    input.focus();
});