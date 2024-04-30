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


    }
}

export default ProjectInfo;