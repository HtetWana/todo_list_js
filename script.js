// [{itemName: 'fdsf sdfdsfs majsdf jsd;fhh; ajhjdf;ja sh;dsa sjdh…h askfv qiwUHG[Oe fgnfqOUA;JFN UA:AUHoh gajshg a ', dateValue: '2023-07-06'},{itemName: 'dsf', dateValue: '2023-07-03'}]

let todoListArr = [];

document.querySelector('.js-add-btn').addEventListener('click', createTodoItem);

function createTodoItem() {
    const inputElement = document.querySelector('.js-todo-input');
    const dateInput = document.querySelector('.js-date-input');

    if (inputElement.value === '' || dateInput.value === "") {
        alert('Please enter Item Name and Date')
        return;
    }

    const itemName = inputElement.value;
    const dateValue = dateInput.value;
    todoListArr.push({ itemName, dateValue });

    // console.log(todoListArr);
    inputElement.value = '';
    dateInput.value = '';
    updateItem();

}

updateItem();
function updateItem() {

    let html = '';
    for (let i = 0; i < todoListArr.length; i++) {
        const todoObj = todoListArr[i];
        const { itemName, dateValue } = todoObj;

        html += `<div class="item-grid"> 
        <div class="item-name">${itemName}</div>
        <div class="item-date">${dateValue}</div>
        <button class="delete-btn">X</button>
        </div>`;
    }
    document.querySelector('.display-todo-list').innerHTML = html;

    document.querySelectorAll('.delete-btn').forEach(function(btn, i) {
        btn.addEventListener('click', function () {
            //this.parentNode.remove();
            // cuz some error
            // if (todoListArr.length === 1) {
            //     todoListArr = [];
            // } else {
                todoListArr.splice(i, 1);
            //}         
            updateItem();
            //console.log(todoListArr, i)
        })
    })

}


