import Task from "./indexTask";
import AllProjects from "./indexProjectsRender";

class TaskFactory {
    static createTask(title, description, dueDate, priority) {
        return new Task(title, description, dueDate, priority);
    }
}

export default TaskFactory;