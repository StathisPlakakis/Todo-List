class Project {
    static myProjects = [];

    constructor (title) {
        this.title = title;
        this.tasks = [];
        Project.myProjects.push(this);
    }

    
}

export default Project;