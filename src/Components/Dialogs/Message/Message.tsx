import s from "./Message.module.css";
import React from "react";
import {MessageType} from "../../../Redux/store";

export const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}