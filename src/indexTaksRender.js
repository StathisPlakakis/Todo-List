import Project from "./indexProject";
import ProjectInfo from "./indexProjectInfo";


class AllTasks {
    static renderAllTasks (project) {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
            project.tasks.forEach((task, index) => {
                const nextRow = document.createElement("tr");
                nextRow.style.cursor = "pointer";
                nextRow.addEventListener("mouseenter", () => {
                    nextRow.style.backgroundColor = "rgba(131, 131, 131, 0.8)"
                })
                nextRow.addEventListener("mouseleave", () => {
                    const isOdd = Number(nextRow.firstChild.textContent) % 2 === 1;
                    nextRow.style.backgroundColor = isOdd ? 
                                                    "rgb(255, 254, 248)" : 
                                                    "rgba(237, 237, 237, 1)"
                })
                // nextRow.addEventListener("click", () => {
                //     console.log("hi");
                // })                
                const no = document.createElement("td");
                no.textContent = `${index + 1}`;
                nextRow.appendChild(no);
                const title = document.createElement("td");
                title.textContent = `${task.title}`;
                nextRow.appendChild(title);
                const description = document.createElement("td");
                description.textContent = `${task.description}`;
                nextRow.appendChild(description);
                const date = document.createElement("td");
                date.textContent = `${task.dueDate}`;
                nextRow.appendChild(date);
                const priority = document.createElement("td");
                priority.textContent = `${task.priority}`;
                nextRow.appendChild(priority);
                const status = document.createElement("td");
                status.textContent = task.status ? "Completed" : "Uncompleted";
                status.style.backgroundColor = task.status ? 
                                                "rgba(156, 255, 138, 0.7)" : 
                                                "rgba(255, 138, 138, 0.8)";
                status.style.cursor = "pointer";
                status.addEventListener("click", (e) => {
                    e.stopPropagation();
                    task.status = !task.status;
                    Project.myProjects.forEach((project) => {
                        if (project.active) {
                            ProjectInfo.projectInfoRender(project);
                        }
                    })
                })
                nextRow.appendChild(status);
                tbody.appendChild(nextRow);
            })
    }
}

export default AllTasks;