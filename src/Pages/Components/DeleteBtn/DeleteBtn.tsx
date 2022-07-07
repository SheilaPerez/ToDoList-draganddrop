import React from 'react';
interface DeleteBtnProps {
    handleClickDelete: () => void;
}
const DeleteBtn: React.FC<DeleteBtnProps> = ({handleClickDelete}) => {
    return (
        <div>
            <button type="button" onClick={handleClickDelete}>Delete</button>
        </div>
    )
}

export default DeleteBtn;