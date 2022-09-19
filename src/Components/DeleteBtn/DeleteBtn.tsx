import React from 'react';
import style from './DeleteBtn.module.css';

interface DeleteBtnProps {
    handleClickDelete: () => void;
}
const DeleteBtn: React.FC<DeleteBtnProps> = ({handleClickDelete}) => {
    return (
        <div>
            <button type="button" onClick={handleClickDelete} className={style.deleteBtn}>Delete</button>
        </div>
    )
}

export default DeleteBtn;