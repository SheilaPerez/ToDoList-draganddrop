import React, { useContext } from 'react';
import OptionsContext, { OptionsContextI } from '../../Context/OptionsContext';
import style from './TaskOptions.module.css';

const TaskOptions = (): JSX.Element => {
    const { option, setOption } = useContext(OptionsContext) as OptionsContextI;
    const handleClickOption = (option: string) => {
        setOption(option);

    }

    return (
        <div className={style.optionsBtnsContainer}>
            <button type="button" onClick={() => handleClickOption('work')} className={style.workBtn}>work</button>
            <button type="button" onClick={() => handleClickOption('home')} className={style.homeBtn}>home</button>
            <button type="button" onClick={() => handleClickOption('college')} className={style.collegeBtn}>college</button>
            <button type="button" onClick={() => handleClickOption('personal')} className={style.personalBtn}>personal</button>
        </div>
    )
}

export default TaskOptions;