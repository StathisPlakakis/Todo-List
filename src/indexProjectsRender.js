import Project from "./indexProject";
import ProjectInfo from "./indexProjectInfo";;


class AllProjects {

    static renderAllProjects () {
        const projects = AllProjects.getProjectsLocal();
        const allProjects = document.querySelector(".project-list");
        allProjects.innerHTML = "";
        projects.forEach((project, index) => {
        const projectElement = document.createElement("div");
        if (project.active) {
            ProjectInfo.projectInfoRender(project);
            projectElement.style.backgroundColor = "rgb(214, 213, 213)";
        }
        projectElement.textContent = project.title;
        projectElement.setAttribute("index", index);
        projectElement.classList.add("project-sidebar");
        projectElement.addEventListener("click", (e) => {
            projects.forEach((project) => {
                project.active = false;
            })
            Project.myProjects.forEach(project => {
                project.active = false;
            })
            const position = e.target.getAttribute("index");
            projects[position].active = true;
            Project.myProjects[position].active = true;
            AllProjects.saveProjectsLocal(projects);
            AllProjects.renderAllProjects();
            ProjectInfo.projectInfoRender(projects[position]);
        })
        allProjects.appendChild(projectElement);
    })
    }

    static newProject () {
        let projects = AllProjects.getProjectsLocal();
        projects.forEach((project) => {
            project.active = false;
        })
        projects[projects.length - 1].active = true;
        AllProjects.saveProjectsLocal(projects);
        AllProjects.renderAllProjects();
        ProjectInfo.projectInfoRender(projects[projects.length - 1]);
    }

    static saveProjectsLocal (projects) {
        localStorage.setItem("projects", JSON.stringify(projects));
    }

    static getProjectsLocal () {
        const projects = localStorage.getItem("projects");
        return projects ? JSON.parse(projects) : [];
    }
}

export default AllProjects;

