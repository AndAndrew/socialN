import React from "react";
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Den
                </div>
                <div className={s.dialog}>
                    Max
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Yo!</div>
                <div className={s.message}>What's hap?</div>
                <div className={s.message}>How are your job?</div>
            </div>
        </div>
    )
}