import Project from "./indexProject";
import ProjectInfo from "./indexProjectInfo";;


class AllProjects {

    static renderAllProjects () {
        
        const allProjects = document.querySelector(".project-list");
        allProjects.innerHTML = "";
        Project.myProjects.forEach((project, index) => {
        const projectElement = document.createElement("div");
        if (project.active) {
            projectElement.style.backgroundColor = "rgb(214, 213, 213)";
        }
        projectElement.textContent = project.title;
        projectElement.setAttribute("index", index);
        projectElement.classList.add("project-sidebar");
        projectElement.addEventListener("click", (e) => {
            Project.myProjects.forEach((project) => {
                project.active = false;
            })
            const position = e.target.getAttribute("index");
            Project.myProjects[position].active = true;
            AllProjects.renderAllProjects();
            ProjectInfo.projectInfoRender(project);
        })
        allProjects.appendChild(projectElement);
    })
    }

    static newProject () {
        Project.myProjects.forEach((project) => {
            project.active = false;
        })
        Project.myProjects[Project.myProjects.length - 1]. active = true;
        ProjectInfo.projectInfoRender(Project.myProjects[Project.myProjects.length - 1]);
    }
}

export default AllProjects;

