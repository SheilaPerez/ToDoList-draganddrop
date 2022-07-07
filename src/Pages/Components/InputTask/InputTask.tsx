import React, {useState} from 'react';
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
        <div>
            <input type="text" value={task} placeholder="add you task" onChange={handleChangeTask}></input>
            <button type="button" onClick={() => clickSaveTask(task)}>Save task</button>
        </div>
    )
}

export default InputTask;