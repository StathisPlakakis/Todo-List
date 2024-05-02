import Project from "./indexProject";

class Task {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
        Project.myProjects.forEach((project) => {
            if (project.active) {
                project.tasks.push(this);
            }
        })
    }
}