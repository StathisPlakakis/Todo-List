import ProjectFactory from "./indexProjectFactory";
import AllProjects from "./indexProjectsRender";
import Project from "./indexProject";



const dialogProjectTitlte = document.querySelector(".projectTitle")

const createProjectButton = document.querySelector(".create");
createProjectButton.addEventListener("click", () => {
    dialogProjectTitlte.showModal();
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    maxLength.textContent = `0 / 50`;
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
        ProjectFactory.createProject(projectInput.value);
        AllProjects.newProject();
        AllProjects.renderAllProjects();
        maxLength.textContent = "0 / 50";
        projectInput.value = "";
        dialogProjectTitlte.close();
    }

}
)
AllProjects.renderAllProjects();