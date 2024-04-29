import Project from "./indexProject";


class AllProjects {

    static renderAllProjects () {
        
        const allProjects = document.querySelector(".project-list");
    allProjects.innerHTML = "";
    Project.myProjects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.textContent = project.title;
    projectElement.setAttribute("index", index);
    projectElement.classList.add("project-sidebar");
    projectElement.addEventListener("click", () => {
        projectElement.style.backgroundColor = "rgb(214, 213, 213)";
    })
    allProjects.appendChild(projectElement);
})
    }
}

export default AllProjects;

