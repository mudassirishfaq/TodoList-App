 let inputBox = document.getElementById('input-box');
  let  listContainer = document.getElementById("list_container");

    let addTask = ()=> {
        if(inputBox.value === ''){
            alert("Please Write Some Text");
            console.log("alert")
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
    }

    listContainer.addEventListener("click",(e)=>{
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle("checked")
            saveData();
        }else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    let saveData = () =>{
        localStorage.setItem("data", listContainer.innerHTML);
    }

    let showData = ()=>{
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showData();