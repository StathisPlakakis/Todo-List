class ProjectInfo {
    static projectInfoRender (project) {
        const projectViewport = document.querySelector(".project");
        projectViewport.innerHTML = "";
        const title = document.createElement("div");
        title.classList.add("projectInfoTitle");
        title.textContent = project.title;
        projectViewport.appendChild(title)
    }
}

export default ProjectInfo;