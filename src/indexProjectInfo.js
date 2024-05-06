import { format } from 'date-fns';
import TaskFactory from './indexTaskFactory';
import AllTasks from './indexTaksRender';
import Project from './indexProject';
import backgroundImagee from './assets/calendar.svg';


class ProjectInfo {

    static userSelect = "undefined";

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
        const today = new Date();
        const formattedDate = format(today, 'yyyy-MM-dd');
        dateElement.setAttribute("min", formattedDate);
        dateIcon.addEventListener("click", () => {
            dateElement.showPicker();
        })
        dateElement.addEventListener("input", () => {
            
            newDateValue.textContent = "";
            newDateValue.textContent += dateElement.value;
            container1.style.width = "max-content";
            container1.style.backgroundImage = "none";
        })

        const fieldset = document.querySelector("#options");
        const inputs = document.getElementsByName("Priority");
        const container = document.querySelector(".priority-icon")
        const newPriorityValue = document.querySelector(".newPriorityValue");
        

        

        fieldset.addEventListener("click", () => {
            
            
            container.style.width = "max-content";
                 
            for (let i = 0; i < 3; i++) {
                if (inputs[i].checked) {
                    ProjectInfo.userSelect = inputs[i].value;
                }
            }  


            if (ProjectInfo.userSelect === "low") {
                newPriorityValue.textContent = "";      
                newPriorityValue.style.color = "yellow";
                newPriorityValue.textContent += "Low";
            }else if (ProjectInfo.userSelect === "medium") {
                newPriorityValue.textContent = "";      
                newPriorityValue.style.color = "orange";
                newPriorityValue.textContent += "Medium";
            }else if (ProjectInfo.userSelect === "high") {
                newPriorityValue.textContent = "";      
                newPriorityValue.style.color = "red";
                newPriorityValue.textContent += "High";
            }

    })

    for (let i = 0; i < 3; i++) {
        if (inputs[i].checked) {
            ProjectInfo.userSelect = inputs[i].value;
        }
    }  

    const cancelButton = document.querySelector(".cancel-task");
    cancelButton.addEventListener("click", () => {
        document.querySelector(".max-chars2").textContent = "0 / 50";
        document.querySelector(".max-chars3").textContent = "0 / 300";
        document.querySelector(".date-icon").style.width = "100px";
        document.querySelector(".date-icon").style.width = "100px";
        document.querySelector(".newDateValue").textContent = "";
        document.querySelector(".date-icon").style.backgroundImage = `url(${backgroundImagee})`;
        ProjectInfo.userSelect = "undefined";
        newPriorityValue.textContent = "Priority";
        newPriorityValue.style.color = "black";
        taskDialog.close();

        document.querySelector(".submit-task").style.display = "inline-block";
        const importantButtons = document.querySelector(".importantButtons");
        const SaveButton = document.querySelector(".save-task");
        const deleteButton = document.querySelector(".delete-task");

        if (SaveButton) {
            importantButtons.removeChild(SaveButton);
            importantButtons.removeChild(deleteButton);
        }
        
    })

    const submitButton = document.querySelector(".submit-task");
    submitButton.addEventListener("click", ProjectInfo.sumbitFunction);

    const containerOfTable = document.createElement("div");
    containerOfTable.classList.add("containerOfTable");
    const tableOfTasks = document.createElement("table");
    const firstRow = document.createElement("tr");
    const thead = document.createElement("thead");
    const firstHeading = document.createElement("th");
    firstHeading.textContent = "No";
    firstHeading.setAttribute("scope", "col");
    firstRow.appendChild(firstHeading);
    const secondHeading = document.createElement("th");
    secondHeading.textContent = "Title";
    secondHeading.setAttribute("scope", "col");
    firstRow.appendChild(secondHeading);
    const thirdHeading = document.createElement("th");
    thirdHeading.textContent = "Description";
    thirdHeading.setAttribute("scope", "col");
    firstRow.appendChild(thirdHeading);
    const fourthHeading = document.createElement("th");
    fourthHeading.textContent = "Date";
    fourthHeading.setAttribute("scope", "col");
    firstRow.appendChild(fourthHeading);
    const fifthHeading = document.createElement("th");
    fifthHeading.textContent = "Priority";
    fifthHeading.setAttribute("scope", "col");
    firstRow.appendChild(fifthHeading);
    const sixthHeading = document.createElement("th");
    sixthHeading.textContent = "Status";
    sixthHeading.setAttribute("scope", "col");
    firstRow.appendChild(sixthHeading);
    thead.appendChild(firstRow);
    tableOfTasks.appendChild(thead);
    const tbody = document.createElement("tbody");
    tableOfTasks.appendChild(tbody);
    containerOfTable.appendChild(tableOfTasks)
    projectViewport.appendChild(containerOfTable);
    AllTasks.renderAllTasks(project);
 }

    static sumbitFunction (e) {
        
            if (document.querySelector(".task-title").value !== "" &&
                document.querySelector(".task-description").value !== "" &&
                document.querySelector("#date").value !== "" &&
                ProjectInfo.userSelect !== "undefined"
                ) {
                    e.preventDefault();
                    TaskFactory.createTask (
                        document.querySelector(".task-title").value,
                        document.querySelector(".task-description").value,
                        document.querySelector("#date").value,
                        ProjectInfo.userSelect
                    );
                    Project.myProjects.forEach((project) => {
                        if (project.active) {
                            ProjectInfo.projectInfoRender(project);
                        }
                    })               
                    document.querySelector(".cancel-task").click();
                    console.log("hi");

                
        }
    }
}
export default ProjectInfo;