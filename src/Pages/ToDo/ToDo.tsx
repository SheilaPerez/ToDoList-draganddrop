import React, {useState, useContext} from 'react';
import InputTask from '../../Components/InputTask';
import style from './ToDo.module.css';
import { v4 as uuidv4 } from 'uuid';
import DeleteBtn from '../../Components/DeleteBtn';
import EditBtn from '../../Components/EditBtn';
import EditInput from '../../Components/EditInput';
import OptionsContext, { OptionsContextI } from '../../Context/OptionsContext';
interface ToDoProps {
  
}
interface TodoTask {
    taskName: string;
    id: string;
    taskOption: string;
}

const ToDo: React.FC<ToDoProps> = (): JSX.Element => {
    const [tasks, setTasks] = useState<TodoTask[]>([]);
    const [dragableTask, setDragableTask] = useState<TodoTask>();
    const [doneTasks, setDoneTasks] = useState<TodoTask[]>([]);
    const [clickedEditBtn, setClickedEditBtn] = useState<Boolean>(false);
    const [taskId, setTaskId] = useState<string>('');
    const { option, setOption } = useContext(OptionsContext) as OptionsContextI;
    const [colorWork, setColorWork] = useState<string>('#ECB390');
    const [colorHome, setColorHome] = useState<string>('#7A86B6');
    const [colorCollege, setColorCollege] = useState<string>('#FBC5C5');
    const [colorPersonal, setColorPersonal] = useState<string>('#ADCF9F');

    const saveTaskBtn = (task: string) => {
        setTasks([...tasks, {
            taskName: task,
            id: uuidv4(),
            taskOption: option,
            }
        ])
        
    }

    const handleDragStart = (task: TodoTask) => {
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

    const clickSaveEditBtn = (taskEdited: string, currentTaskEdited: TodoTask) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === currentTaskEdited.id) {
                    currentTaskEdited.taskName = taskEdited;
                    return currentTaskEdited;
                } else {
                    return task;
                }
            })
        )
        setClickedEditBtn(false);
    }

    const handleClickEdit = (taskId: string) => {
        setClickedEditBtn(true);
        setTaskId(taskId);
    }

    const optionsColors = (option: string) => {
        switch (option) {
            case 'work':
                
        }
    }

    return (
        <div>
            <h1 className={style.todoTitle}>To do list</h1>
            <div className={style.containerTodo}>
                <InputTask handleClickSaveTask={saveTaskBtn}></InputTask>
                <div className={style.doingAndDone}>
                    <div className={style.doingContainer}>
                        <h3 className={style.doingTitle}>Doing...</h3>
                        <div className={style.tasksList}>
                            {tasks.map((task) => {
                                return (
                                    <div>
                                        {clickedEditBtn && task.id === taskId ?
                                            <EditInput taskprop={task.taskName} clickSaveEditBtn={(currentTaskEdited) => clickSaveEditBtn(currentTaskEdited, task)}></EditInput>
                                            : 
                                            <div className={style.tasksContainer}>
                                                <div className={style.tasksListContainer}>
                                                    <p draggable={true} onDragStart={() => handleDragStart(task)}
                                                        style={{
                                                            color: task.taskOption === 'work' ? colorWork : task.taskOption === 'home' ? colorHome :
                                                                task.taskOption === 'college' ? colorCollege : task.taskOption === 'personal' ? colorPersonal : ''
                                                        }} className={style.taskNameStyle}>{task.taskName}</p>
                                                    <p style={{ color: task.taskOption === 'work' ? colorWork : task.taskOption === 'home' ? colorHome :
                                                        task.taskOption === 'college' ? colorCollege : task.taskOption === 'personal' ? colorPersonal : ''
                                                        }} className={style.optionTask}>{task.taskOption}</p>
                                                </div>
                                                <div className={style.editAndDelteBtnContainer}>
                                                    <EditBtn handleClickEditBtn={() => handleClickEdit(task.id)}></EditBtn> 
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ) 
                            })}
                        </div>
                    </div>
                    <div className={style.doneContainer}>
                        <h3>Done</h3>
                        <div className={style.tasksList} onDrop={handleDropTask} onDragOver={(e) => e.preventDefault()}>
                            {doneTasks.map((doneTask) => {
                                return (
                                    <div className={style.tasksContainer}>
                                        <div className={style.tasksListContainer}>
                                            <p style={{color: doneTask.taskOption === 'work' ? colorWork : doneTask.taskOption === 'home' ? colorHome :
                                                    doneTask.taskOption === 'college' ? colorCollege : doneTask.taskOption === 'personal' ? colorPersonal : ''
                                                    }} className={style.taskNameStyle}>{doneTask.taskName}</p>
                                            <p style={{ color: doneTask.taskOption === 'work' ? colorWork : doneTask.taskOption === 'home' ? colorHome :
                                                    doneTask.taskOption === 'college' ? colorCollege : doneTask.taskOption === 'personal' ? colorPersonal : ''
                                                }} className={style.optionTask}>{doneTask.taskOption}</p>
                                        </div>
                                        <div className={style.editAndDelteBtnContainer}>
                                            <DeleteBtn handleClickDelete={() => deleteDoneTaskBtn(doneTask)}></DeleteBtn>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}


export default ToDo;