import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogItemType} from "../../../Redux/store";

export const DialogItem = (props: DialogItemType) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}