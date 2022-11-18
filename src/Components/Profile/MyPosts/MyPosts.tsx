import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../Utils/Validators/Validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

export const MyPosts = (props: ProfilePropsType) => {

    let postsElements = props.profilePage.posts.map(post => <Post id={post.id} message={post.message}
                                                                  likesCount={post.likesCount}/>);

    const onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component={Textarea}
                   validate={[requiredField, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)