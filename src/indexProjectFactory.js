import Project from "./indexProject";

class ProjectFactory {
    static createProject(title) {
        return new Project(title)
    }
}

export default ProjectFactory;