const dialogProjectTitlte = document.querySelector(".projectTitle")

const createProjectButton = document.querySelector(".create");
createProjectButton.addEventListener("click", () => {
    dialogProjectTitlte.showModal();
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
dialogProjectTitlte.close();
});

export {
    createProjectButton,
    cancel
};