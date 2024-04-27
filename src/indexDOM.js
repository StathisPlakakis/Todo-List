const dialogProjectTitlte = document.querySelector(".projectTitle")

const createProjectButton = document.querySelector(".create");
createProjectButton.addEventListener("click", () => dialogProjectTitlte.showModal());

export {
    createProjectButton
};