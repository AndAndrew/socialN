import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItems/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Andrew'} id={2}/>
                <DialogItem name={'Den'} id={3}/>
                <DialogItem name={'Max'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={'Yo!'}/>
                <Message message={'What\'s hap?'}/>
                <Message message={'How are your job?'}/>
            </div>
        </div>
    )
}