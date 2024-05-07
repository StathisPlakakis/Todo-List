import AllProjects from "./indexProjectsRender";
class Task {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
        const projects = AllProjects.getProjectsLocal();
        projects.forEach((project) => {
            if (project.active) {
                project.tasks.push(this);
            }
        })

        AllProjects.saveProjectsLocal(projects);
    }
}

export default Task;