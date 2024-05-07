import AllProjects from "./indexProjectsRender";

class Project {
    constructor (title) {
        this.title = title;
        this.tasks = [];
        this.active = true;
        const projects = AllProjects.getProjectsLocal();
        projects.push(this);
        AllProjects.saveProjectsLocal(projects);
    }    
}

export default Project;