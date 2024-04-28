import Project from "./indexProject";

const dialogProjectTitlte = document.querySelector(".projectTitle")

const createProjectButton = document.querySelector(".create");
createProjectButton.addEventListener("click", () => {
    dialogProjectTitlte.showModal();
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
dialogProjectTitlte.close();
});

const projectInput = document.querySelector(".projectInput");
const maxLength = document.querySelector(".max-chars");
projectInput.addEventListener("input", (e) => {
    const numOfChars = e.target.value.length;
    maxLength.textContent = `${numOfChars} / 50`;
})

const submit = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
    if (projectInput.value.length > 0) {
        e.preventDefault();
        const newProject = new Project(projectInput.value);
        const allProjects = document.querySelector(".project-list");
        allProjects.innerHTML = "";
        Project.myProjects.forEach((project, index) => {
            const projectElement = document.createElement("div");
            projectElement.textContent = project.title;
            projectElement.setAttribute("index", index);
            projectElement.classList.add("project-sidebar");
            allProjects.appendChild(projectElement);
        })
        maxLength.textContent = "0 / 50";
        projectInput.value = "";
        dialogProjectTitlte.close();
    }
})

