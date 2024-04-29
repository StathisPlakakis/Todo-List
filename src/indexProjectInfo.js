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

    }
}

export default ProjectInfo;