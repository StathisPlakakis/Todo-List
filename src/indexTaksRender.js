import Project from "./indexProject";
import ProjectInfo from "./indexProjectInfo";


class AllTasks {
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
                    const data = nextRow.children;
                    const index = Number(data[0].textContent) - 1;
                    const title = data[1].textContent;
                    const description = data[2].textContent;
                    const date = data[3].textContent;
                    const priority = data[4].textContent;
                    const taskDialog = document.querySelector(".newTaskDialog");

                    taskDialog.showModal();
                    const taskTitle = document.querySelector(".task-title");
                    taskTitle.value =  title;
                    const taskDescription = document.querySelector(".task-description");
                    taskDescription.value = description;
                    const taskDate = document.querySelector("#date");
                    const newDateValue = document.querySelector(".newDateValue");
                    const container1 = document.querySelector(".date-icon")
                    taskDate.value = `${date}`;
                    newDateValue.textContent = date;
                    container1.style.width = "max-content";
                    container1.style.backgroundImage = "none";
                    const inputs = document.getElementsByName("Priority");
                    for (let i = 0; i < 3; i++) {
                        if (inputs[i].value === priority) {
                            inputs[i].checked = true;
                            ProjectInfo.userSelect = inputs[i].value;
                        }
                    }
                    const newPriorityValue = document.querySelector(".newPriorityValue");
                    if (priority === "low") {
                        newPriorityValue.textContent = "";      
                        newPriorityValue.style.color = "yellow";
                        newPriorityValue.textContent += "Low";
                    }else if (priority === "medium") {
                        newPriorityValue.textContent = "";      
                        newPriorityValue.style.color = "orange";
                        newPriorityValue.textContent += "Medium";
                    }else if (priority === "high") {
                        newPriorityValue.textContent = "";      
                        newPriorityValue.style.color = "red";
                        newPriorityValue.textContent += "High";
                    }



                    
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
}

export default AllTasks;