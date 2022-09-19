import React, {useState} from 'react';
import style from './EditInput.module.css';

interface EditInputProps {
    taskprop: string,
    clickSaveEditBtn: (taskEdited: string) => void;
}
const EditInput: React.FC<EditInputProps> = ({ taskprop, clickSaveEditBtn }) => {
    const [taskEdited, SetTaskEdited] = useState<string>(taskprop);

    const handleChangeEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTaskEdited(e.target.value)
    }

    const handleClickSaveEditBtn = (taskEdited: string) => {
        clickSaveEditBtn(taskEdited);
        SetTaskEdited('');
    }


    return (
        <div>
            <input type="text" value={taskEdited} onChange={(e) => handleChangeEditInput(e)} className={style.inputEdit}></input>
            <button type="button" onClick={() => handleClickSaveEditBtn(taskEdited)} className={style.saveEditBtn}>Save</button>
        </div>
    )
}

export default EditInput;