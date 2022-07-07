import React, {useState, DragEvent} from 'react';
import InputTask from '../Components/InputTask';
import style from './ToDo.module.css';
import { v4 as uuidv4 } from 'uuid';
import DeleteBtn from '../Components/DeleteBtn';

interface ToDoProps {

}
interface TodoTask {
    taskName: string;
    id: string;
}

const ToDo: React.FC<ToDoProps> = (): JSX.Element => {
    const [tasks, setTasks] = useState<TodoTask[]>([]);
    const [dragableTask, setDragableTask] = useState<TodoTask>();
    const [doneTasks, setDoneTasks] = useState<TodoTask[]>([]);
    const saveTaskBtn = (task: string) => {
        setTasks([...tasks, {
            taskName: task,
            id: uuidv4(),
            }
        ])
    }

    const handleDragStart = (event: DragEvent<HTMLDivElement>, task: TodoTask) => {
        setDragableTask(task);
    }

    const handleDropTask = () => {
        if (dragableTask ){
            setDoneTasks([...doneTasks, dragableTask])
            setTasks(tasks.filter((task) => {
                return task.id !== dragableTask.id
            }))
        }
    }

    const deleteDoneTaskBtn = (doneTask: TodoTask) => {
        if (dragableTask) {
            setDoneTasks(doneTasks.filter((task) => {
                return task.id !== doneTask.id
            }))
        } 
    }

    return (
        <div>
            <h1>To do list</h1>
            <InputTask handleClickSaveTask={saveTaskBtn}></InputTask>
            {tasks.map((task) => {
                return (
                    <div className={style.taskContainer}>
                        <p draggable={true} onDragStart={(event) => handleDragStart(event, task)}>{task.taskName}</p>
                    </div>
                ) 
            })}
            <h1>Done</h1>
            <div style={{width: "200px", height: "200px", border: "1px solid"}} onDrop={handleDropTask} onDragOver={(e) => e.preventDefault()}>
                {doneTasks.map((doneTask) => {
                    return (
                        <div>
                            <p>{doneTask.taskName}</p>
                            <DeleteBtn handleClickDelete={() => deleteDoneTaskBtn(doneTask)}></DeleteBtn>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default ToDo;