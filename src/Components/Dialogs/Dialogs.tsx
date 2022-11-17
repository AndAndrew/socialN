import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItems/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../Utils/Validators/Validators";

export const Dialogs = (props: DialogsPropsType) => {

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}
                                                                              key={message.id}
                                                                              id={message.id}/>);
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                              key={dialog.id}
                                                                              id={dialog.id}/>);

    const addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    if (props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

type FormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[requiredField, maxLength50]}
                   name='newMessageBody' placeholder='Enter your message'/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)