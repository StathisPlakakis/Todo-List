import "./indexProject";

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
    e.preventDefault();

})

export {
    createProjectButton,
    cancel,
    projectInput,
    maxLength
};