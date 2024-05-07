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
        projectElement.addEventListener("click", () => {
            const projects = AllProjects.getProjectsLocal();
            projects.forEach((project) => {
                project.active = false;
            })
            projects[index].active = true;
            AllProjects.saveProjectsLocal(projects);
            AllProjects.renderAllProjects();
        })
        allProjects.appendChild(projectElement);
    })
    }

    static newProject () {
        const projects = AllProjects.getProjectsLocal();
        projects.forEach((project) => {
            project.active = false;
        })
        projects[projects.length - 1].active = true;
        AllProjects.saveProjectsLocal(projects);
        AllProjects.renderAllProjects();
        ProjectInfo.projectInfoRender(projects[projects.length - 1]);
    }


    static saveProjectsLocal(projects) {
        if (Array.isArray(projects)) {
            localStorage.setItem("projects", JSON.stringify(projects)); 
        } else {
            console.warn("Attempted to save invalid projects data to localStorage");
        }
    }
    


    static getProjectsLocal() {
        const projects = localStorage.getItem("projects");
        
        if (projects) {
            try {
                return JSON.parse(projects); 
            } catch (e) {
                console.error("Error parsing projects from localStorage:", e);
                return []; 
            }
        } else {
            return []; 
        }
    }
    
}

export default AllProjects;

