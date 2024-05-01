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
        dateIcon.addEventListener("click", () => {
            dateElement.showPicker();
        })
        dateElement.addEventListener("change", () => {
            const container = document.querySelector(".date-icon")
            const newDateValue = document.querySelector(".newDateValue");
            newDateValue.textContent = "";
            newDateValue.textContent += dateElement.value;
            container.style.width = "max-content";
            container.style.backgroundImage = "none";
        })
    }
}

export default ProjectInfo;