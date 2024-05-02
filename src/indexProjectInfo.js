import { format } from 'date-fns';

class ProjectInfo {
    static projectInfoRender (project) {
        const taskDialog = document.querySelector(".newTaskDialog");
        const projectViewport = document.querySelector(".project");
        projectViewport.innerHTML = "";
        projectViewport.appendChild(taskDialog);
        const title = document.createElement("div");
        title.classList.add("projectInfoTitle");
        title.textContent = project.title;
        projectViewport.appendChild(title);
        const addNewTask = document.createElement("button");
        addNewTask.textContent = "Add new Task";
        addNewTask.classList.add("create-task");
        addNewTask.addEventListener("click", () => {
            taskDialog.showModal();
        })
        projectViewport.appendChild(addNewTask);

        const taskTitle = document.querySelector(".task-title");
        const maxLength2 = document.querySelector(".max-chars2");
        taskTitle.addEventListener("input", (e) => {
            const numOfChars = e.target.value.length;
            maxLength2.textContent = `${numOfChars} / 50`;
        })

        const taskDescription = document.querySelector(".task-description");
        const maxLength3 = document.querySelector(".max-chars3");
        taskDescription.addEventListener("input", (e) => {
            const numOfChars = e.target.value.length;
            maxLength3.textContent = `${numOfChars} / 300`;
        })

        const dateIcon = document.querySelector(".dateData");
        const dateElement = document.querySelector("#date");
        const container1 = document.querySelector(".date-icon")
        const newDateValue = document.querySelector(".newDateValue");
        const backgroundImage = container1.style.backgroundImage;
        const today = new Date();
        const formattedDate = format(today, 'yyyy-MM-dd');
        dateElement.setAttribute("min", formattedDate);
        dateIcon.addEventListener("click", () => {
            dateElement.showPicker();
        })
        dateElement.addEventListener("change", () => {
            
            newDateValue.textContent = "";
            newDateValue.textContent += dateElement.value;
            container1.style.width = "max-content";
            container1.style.backgroundImage = "none";
        })

        const priorityData = document.querySelector(".priorityData");
        const fieldset = document.querySelector("#options");
        const labels = document.querySelectorAll(".lab")
        const inputs = document.getElementsByName("Priority");
        let userSelect = "undefined";
        const container = document.querySelector(".priority-icon")
        const newPriorityValue = document.querySelector(".newPriorityValue");
       
        fieldset.addEventListener("click", () => {
            
            
            container.style.width = "max-content";
            container.style.backgroundImage = "none";
            newPriorityValue.textContent = "";      
                 
            for (let i = 0; i < 3; i++) {
                if (inputs[i].checked) {
                    userSelect = inputs[i].value;
                }
            }  


            if (userSelect === "low") {
                newPriorityValue.style.color = "yellow";
                newPriorityValue.textContent += "Low";
            }else if (userSelect === "medium") {
                newPriorityValue.style.color = "orange";
                newPriorityValue.textContent += "Medium";
            }else {
                newPriorityValue.style.color = "red";
                newPriorityValue.textContent += "High";
            }

    })

    const cancelButton = document.querySelector(".cancel-task");
    cancelButton.addEventListener("click", () => {
        document.querySelector(".max-chars2").textContent = "0 / 50";
        document.querySelector(".max-chars3").textContent = "0 / 300";
        document.querySelector(".date-icon").style.width = "100px";
        document.querySelector(".date-icon").style.width = "100px";
        document.querySelector(".date-icon").style.backgroundImage = `${backgroundImage}`;
        document.querySelector(".newDateValue").textContent = "";
        userSelect = "undefined";
        newPriorityValue.textContent = "Priority";
        newPriorityValue.style.color = "black";
        taskDialog.close();
    })

    const submitButton = document.querySelector(".submit-task");
    submitButton.addEventListener("click", (e) => { 
        if (document.querySelector(".task-title").value !== "" &&
            document.querySelector(".task-description").value !== "" &&
            document.querySelector("#date").value !== "" &&
            userSelect !== "undefined"
            ) {
                e.preventDefault();
            }
    })
}
}
export default ProjectInfo;