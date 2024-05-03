import Project from "./indexProject";


class AllTasks {
    static renderAllTasks (project) {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
            project.tasks.forEach((task, index) => {
                const nextRow = document.createElement("tr");
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
                nextRow.appendChild(status);
                const edit = document.createElement("div");
                edit.textContent = "Edit"
                nextRow.appendChild(edit);
                const del = document.createElement("div");
                del.textContent = "Delete"
                nextRow.appendChild(del);
                tbody.appendChild(nextRow);
            })
    }
}

export default AllTasks;