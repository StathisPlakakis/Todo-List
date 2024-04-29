class Project {
    static myProjects = [];

    constructor (title) {
        this.title = title;
        this.tasks = [];
        this.active = true;
        Project.myProjects.push(this);
    }

    
}

export default Project;