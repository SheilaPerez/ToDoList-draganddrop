import React from 'react';
import style from './EditBtn.module.css';

interface EditBtnProps {
    handleClickEditBtn: () => void ;
}

const EditBtn: React.FC<EditBtnProps> = ({ handleClickEditBtn }) => {

    return (
        <div>
            <button onClick={handleClickEditBtn} className={style.editBtn}>Edit</button>
        </div>
    )
}

export default EditBtn;