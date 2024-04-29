class ProjectInfo {
    static projectInfoRender (project) {
        const projectViewport = document.querySelector(".project");
        projectViewport.innerHTML = "";
        const title = document.createElement("div");
        title.classList.add("projectInfoTitle");
        title.textContent = project.title;
        projectViewport.appendChild(title);
        const addNewTask = document.createElement("button");
        addNewTask.textContent = "Add new Task";
        addNewTask.classList.add("create-task")
        projectViewport.appendChild(addNewTask);

    }
}

export default ProjectInfo;