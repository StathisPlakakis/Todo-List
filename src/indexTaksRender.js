import Project from "./indexProject";
import ProjectInfo from "./indexProjectInfo";


class AllTasks {

    static data = "";
    static indexxx = "";
    static title = "";
    static description = "";
    static date = "";
    static priority = "";
     

    
    static renderAllTasks (project) {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
            project.tasks.forEach((task, index) => {
                const nextRow = document.createElement("tr");
                nextRow.style.cursor = "pointer";
                nextRow.addEventListener("mouseenter", () => {
                    nextRow.style.backgroundColor = "rgba(131, 131, 131, 0.8)"
                })
                nextRow.addEventListener("mouseleave", () => {
                    const isOdd = Number(nextRow.firstChild.textContent) % 2 === 1;
                    nextRow.style.backgroundColor = isOdd ? 
                                                    "rgb(255, 254, 248)" : 
                                                    "rgba(237, 237, 237, 1)"
                })
                nextRow.addEventListener("click", () => {
                    AllTasks.data = nextRow.children;
                    AllTasks.indexxx = Number(AllTasks.data[0].textContent) - 1;
                    AllTasks.title = AllTasks.data[1].textContent;
                    AllTasks.description = AllTasks.data[2].textContent;
                    AllTasks.date = AllTasks.data[3].textContent;
                    AllTasks.priority = AllTasks.data[4].textContent;
                    const taskDialog = document.querySelector(".newTaskDialog");

                    taskDialog.showModal();
                    const taskTitle = document.querySelector(".task-title");
                    taskTitle.value =  AllTasks.title;
                    const maxLength2 = document.querySelector(".max-chars2");
                    const numOfChars = taskTitle.value.length;
                    maxLength2.textContent = `${numOfChars} / 50`;


                    const taskDescription = document.querySelector(".task-description");
                    taskDescription.value = AllTasks.description;
                    const maxLength3 = document.querySelector(".max-chars3");
                    const numOfChars2 = taskDescription.value.length;
                    maxLength3.textContent = `${numOfChars2} / 300`;


                    const taskDate = document.querySelector("#date");
                    const newDateValue = document.querySelector(".newDateValue");
                    const container1 = document.querySelector(".date-icon")
                    taskDate.value = `${AllTasks.date}`;
                    newDateValue.textContent = AllTasks.date;
                    container1.style.width = "max-content";
                    container1.style.backgroundImage = "none";


                    const inputs = document.getElementsByName("Priority");
                    for (let i = 0; i < 3; i++) {
                        if (inputs[i].value === AllTasks.priority) {
                            inputs[i].checked = true;
                            ProjectInfo.userSelect = inputs[i].value;
                        }
                    }
                    const newPriorityValue = document.querySelector(".newPriorityValue");
                    if (AllTasks.priority === "low") {
                        newPriorityValue.textContent = "";      
                        newPriorityValue.style.color = "yellow";
                        newPriorityValue.textContent += "Low";
                    }else if (AllTasks.priority === "medium") {
                        newPriorityValue.textContent = "";      
                        newPriorityValue.style.color = "orange";
                        newPriorityValue.textContent += "Medium";
                    }else if (AllTasks.priority === "high") {
                        newPriorityValue.textContent = "";      
                        newPriorityValue.style.color = "red";
                        newPriorityValue.textContent += "High";
                    }


                    const submitButton = document.querySelector(".submit-task");
                    submitButton.style.display = "none";
                    const importantButtons = document.querySelector(".importantButtons");
                    const saveButton = document.createElement("button");
                    saveButton.classList.add("save-task");
                    saveButton.textContent = "Save"
                    importantButtons.appendChild(saveButton);
                    saveButton.addEventListener("click", AllTasks.saveFunction);
                        
                })                
                const no = document.createElement("td");
                no.textContent = `${index + 1}`;
                nextRow.appendChild(no);
                const title = document.createElement("td");
                title.textContent = `${task.title}`;
                nextRow.appendChild(title);
                const description = document.createElement("td");
                description.textContent = `${task.description}`;
                nextRow.appendChild(description);
                const date = document.createElement("td");
                date.textContent = `${task.dueDate}`;
                nextRow.appendChild(date);
                const priority = document.createElement("td");
                priority.textContent = `${task.priority}`;
                nextRow.appendChild(priority);
                const status = document.createElement("td");
                status.textContent = task.status ? "Completed" : "Uncompleted";
                status.style.backgroundColor = task.status ? 
                                                "rgba(156, 255, 138, 0.7)" : 
                                                "rgba(255, 138, 138, 0.8)";
                status.style.cursor = "pointer";
                status.addEventListener("click", (e) => {
                    e.stopPropagation();
                    task.status = !task.status;
                    Project.myProjects.forEach((project) => {
                        if (project.active) {
                            ProjectInfo.projectInfoRender(project);
                        }
                    })
                })
                nextRow.appendChild(status);
                tbody.appendChild(nextRow);
            })
    }

    static saveFunction (e) {
        if (document.querySelector(".task-title").value !== "" &&
                document.querySelector(".task-description").value !== "" &&
                document.querySelector("#date").value !== "" &&
                ProjectInfo.userSelect !== "undefined"
                ) {
                    e.preventDefault();
                    Project.myProjects.forEach((project) => {
                        if (project.active) {
                            project.tasks[AllTasks.indexxx].title = document.querySelector(".task-title").value;
                            project.tasks[AllTasks.indexxx].description = document.querySelector(".task-description").value;
                            project.tasks[AllTasks.indexxx].dueDate = document.querySelector("#date").value;
                            const inputs = document.getElementsByName("Priority");
                            for (let i = 0; i < 3; i++) {
                                if (inputs[i].checked) {
                                    project.tasks[AllTasks.indexxx].priority = inputs[i].value;
                                }
                            }
                            ProjectInfo.projectInfoRender(project);
                        }
                    }) 
                    const importantButtons = document.querySelector(".importantButtons");
                    const submitButton = document.querySelector(".submit-task");
                    submitButton.style.display = "inline-block";
                    const SaveButton = document.querySelector(".save-task");
                    importantButtons.removeChild(SaveButton);
                    document.querySelector(".cancel-task").click();
                }
    }
}

export default AllTasks;