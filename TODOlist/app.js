let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", e => {
    // prevent form from being submitted
    e.preventDefault();

    //get the input values
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoYear = form.children[1].value;
    let todoMonth = form.children[2].value;
    let todoDay = form.children[3].value;
    // console.log(todoText, todoYear, todoMonth, todoDay); 检查是否成功了

    if (todoText === "") {
        alert("Please Enter some text");
        return; //下面的代码就不会被执行 不然还是会出现空list
    }

    //create a todo
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = todoText;
    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = todoYear + "/" +todoMonth +"/"+todoDay;

    todo.appendChild(text);
    todo.appendChild(time);

    // create green check and red trash
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-calendar-check"></i>';
    
    completeButton.addEventListener("click", e => {
        let todoItem = e.target.parentElement;
        console.log(todoItem);
        todoItem.classList.toggle("done");
    })

    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    
    trashButton.addEventListener("click", e => {
        let todoItem = e.target.parentElement;
        console.log(todoItem);
        todoItem.addEventListener("animationed", () => {
            //remove from local storage
            let text = todoItem.children[0].innerText;
            let myListArray = JSON.parse(localStorage.getItem("list"));
            myListArray.forEach((item, index) => {
                //callback function
                if (item.todoText == text) {
                    myListArray.splice(index,1);
                    localStorage.setItem("list", JSON.stringify(myListArray));
                }
            })
            
            todoItem.remove();
        })

        todoItem.style.animation = "scaleDown 0.3s forwards";
       
    })

    todo.appendChild(completeButton);
    todo.appendChild(trashButton);

    todo.style.animation = "scaleUp 0.3s forwards";

    // create an object
    let myTodo = {
        todoText: todoText,
        todoYear: todoYear,
        todoMonth: todoMonth,
        todoDay: todoDay,
    };


    //store data into an array of objects
    let myList = localStorage.getItem("list");
    // console.log(myList)
    if (myList == null) {
        localStorage.setItem("list",JSON.stringify([]));
    } else {
        let myListArray = JSON.parse(myList);
        myListArray.push(myTodo);
        localStorage.setItem("list", JSON.stringify(myListArray));
    }

    console.log(JSON.parse(localStorage.getItem("list")));

    form.children[0].value = ""; //clear text input
    section.appendChild(todo);
})

loadData();

function loadData() {
    let myList = localStorage.getItem("list");
if (myList !== null) {
    let myListArray = JSON.parse(myList);
    myListArray.forEach ( item => {
        //create a todo
        let todo = document.createElement("div");
        todo.classList.add("todo");
        let text = document.createElement("p");
        text.classList.add("todo-text");
        text.innerText = item.todoText;
        let time = document.createElement("p");
        time.classList.add("todo-time");
        time.innerText = item.todoYear+"/"+item.todoMonth+"/"+item.todoDay;
        todo.appendChild(text);
        todo.appendChild(time);

        //create check and trash button
        let completeButton = document.createElement("button");
        completeButton.classList.add("complete");
        completeButton.innerHTML = '<i class="fa-solid fa-calendar-check"></i>';
        completeButton.addEventListener("click", e => {
            let todoItem = e.target.parentElement;
            console.log(todoItem);
            todoItem.classList.toggle("done");
        })
    
        let trashButton = document.createElement("button");
        trashButton.classList.add("trash");
        trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        
        trashButton.addEventListener("click", e => {
            let todoItem = e.target.parentElement;
            console.log(todoItem);
            todoItem.addEventListener("animationed", () => {
                //remove from local storage
                let text = todoItem.children[0].innerText;
                let myListArray = JSON.parse(localStorage.getItem("list"));
                myListArray.forEach((item, index) => {
                    //callback function
                    if (item.todoText == text) {
                        myListArray.splice(index,1);
                        localStorage.setItem("list", JSON.stringify(myListArray));
                    }
                })

                todoItem.remove();
            })
    
            todoItem.style.animation = "scaleDown 0.3s forwards";
            
        }) 
        todo.appendChild(completeButton);
        todo.appendChild(trashButton);

        section.appendChild(todo);
    })
}
}

let myList = localStorage.getItem("list");
if (myList !== null) {
    let myListArray = JSON.parse(myList);
    myListArray.forEach ( item => {
        //create a todo
        let todo = document.createElement("div");
        todo.classList.add("todo");
        let text = document.createElement("p");
        text.classList.add("todo-text");
        text.innerText = item.todoText;
        let time = document.createElement("p");
        time.classList.add("todo-time");
        time.innerText = item.todoYear+"/"+item.todoMonth+"/"+item.todoDay;
        todo.appendChild(text);
        todo.appendChild(time);

        //create check and trash button
        let completeButton = document.createElement("button");
        completeButton.classList.add("complete");
        completeButton.innerHTML = '<i class="fa-solid fa-calendar-check"></i>';
        completeButton.addEventListener("click", e => {
            let todoItem = e.target.parentElement;
            console.log(todoItem);
            todoItem.classList.toggle("done");
        })
    
        let trashButton = document.createElement("button");
        trashButton.classList.add("trash");
        trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        
        trashButton.addEventListener("click", e => {
            let todoItem = e.target.parentElement;
            console.log(todoItem);
            todoItem.addEventListener("animationed", () => {
                //remove from local storage
                let text = todoItem.children[0].innerText;
                let myListArray = JSON.parse(localStorage.getItem("list"));
                myListArray.forEach((item, index) => {
                    //callback function
                    if (item.todoText == text) {
                        myListArray.splice(index,1);
                        localStorage.setItem("list", JSON.stringify(myListArray));
                    }
                })

                todoItem.remove();
            })
    
            todoItem.style.animation = "scaleDown 0.3s forwards";
            
        }) 
        todo.appendChild(completeButton);
        todo.appendChild(trashButton);

        section.appendChild(todo);
    })
}

function mergeTime(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while ( i < arr1.length && j < arr2.length) {
        if (Number(arr1[i].todoYear) > Number(arr2[j].todoYear)) {
            result.push(arr2[j]);
            j++;
        } else if ( Number(arr1[i].todoYear) < Number(arr2[j].todoYear)) {
            result.push(arr1[i]);
            i++;
        } else if ( Number(arr1[i].todoYear) == Number(arr2[j].todoYear)) {
            if (Number(arr1[i].todoMonth) > Number(arr2[j].todoMonth)) {
                result.push(arr2[j]);
                j++;
            } else if (Number(arr1[i].todoMonth) < Number(arr2[j].todoMonth)){
                result.push(arr1[i]);
                i++;
            } else if (Number(arr1[i].todoMonth) == Number(arr2[j].todoMonth)) {
                if (Number(arr1[i].todoDay) > Number(arr2[j].todoDay)) {
                    result.push(arr2[j]);
                    j++;
                }else {
                    result.push(arr1[i]);
                    i++;
                }
            }     
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    } else {
        let middle = Math.floor(arr.length /2);
        let right = arr.slice(0, middle);
        let left = arr.slice(middle, arr.length);
        return mergeTime(mergeSort(right), mergeSort(left)); //递回算法
    }
}
console.log(mergeSort(JSON.parse(localStorage.getItem("list"))));

//给sortbutton 加排序
let sortButton = document.querySelector("div.sort button");
sortButton.addEventListener("click", ()=>{
    //sort data
    let sortedArray = mergeSort(JSON.parse(localStorage.getItem("list")));
    localStorage.setItem("list", JSON.stringify(sortedArray));

    //remove data
    let len = section.children.length;
    for (let i=0; i<len; i++) {
        section.children[0].remove();
    }

    //load data
    loadData()

})