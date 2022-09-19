import React, { useState } from 'react';
import style from './InputTask.module.css';
import TaskOptions from '../../Components/TaskOptions';

interface InputTaskProps {
    handleClickSaveTask: (task: string) => void;
}
const InputTask: React.FC<InputTaskProps> = ({handleClickSaveTask}) => {
    const [task, setTask] = useState('');

    const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const clickSaveTask = (task: string) => {
        setTask('');
        handleClickSaveTask(task);
        
    }

    return (
        <div className={style.taskContainer}>
            <input type="text" value={task} placeholder="Add your task" onChange={handleChangeTask} className={style.taskInput}></input>
            <TaskOptions></TaskOptions>
            <button type="button" onClick={() => clickSaveTask(task)} className={style.saveTaskBtn}>Save task</button>
        </div>
    )
}

export default InputTask;