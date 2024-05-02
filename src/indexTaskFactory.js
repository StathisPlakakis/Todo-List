import Task from "./indexTask";

class TaskFactory {
    static createTask(title, description, dueDate, priority) {
        return new Task(title, description, dueDate, priority);
    }
}

export default TaskFactory;