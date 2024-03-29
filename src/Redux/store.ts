export {}
// import {profileReducer} from "./profileReducer";
// import {dialogsReducer} from "./dialogsReducer";
// import {UserType} from "./usersReducer";
//
// export type MessageType = {
//     id: number,
//     message: string
// }
// export type DialogItemType = {
//     name: string,
//     id: number
// }
// export type PostType = {
//     id: number,
//     message: string,
//     likesCount: number
// }
// export type MyPostsType = {
//     posts: Array<PostType>,
//     newPostText: string
// }
// export type StateType = {
//
//     profilePage: {
//         posts: Array<PostType>
//         newPostText: string
//     },
//     dialogsPage: {
//         dialogs: Array<DialogItemType>,
//         messages: Array<MessageType>,
//         newMessageBody: string
//     },
//     users: Array<UserType>
// }
//
// export type StoreType = {
//     _state: StateType,
//     _callSubscriber: (store: StoreType) => void,
//     getState: () => StateType,
//     subscribe: (callback: (store: StoreType) => void) => void,
//     dispatch: (action: ActionsTypes) => void
// }
//
// export type ActionsTypes = any
//     // PostActionTypes | MessageActionTypes
//     // AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType | UpdateNewMessageBodyActionType
//
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "It's my first post", likesCount: 5},
//                 {id: 2, message: "It's my second post", likesCount: 7},
//                 {id: 3, message: "It's my third post", likesCount: 2}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrew'},
//                 {id: 3, name: 'Den'},
//                 {id: 4, name: 'Max'},
//                 {id: 5, name: 'Kate'},
//                 {id: 6, name: 'Mike'},
//                 {id: 7, name: 'Lucy'}
//             ],
//             messages: [
//                 {id: 1, message: 'Yo!'},
//                 {id: 2, message: 'What\'s hap?'},
//                 {id: 3, message: 'How are your job?'},
//                 {id: 4, message: 'Hello'},
//                 {id: 5, message: 'I\'m still learning'},
//                 {id: 6, message: 'But the way will over'},
//                 {id: 7, message: 'Ah, shit!'}
//             ],
//             newMessageBody: ''
//         },
//         users: [
//             {id: '1',
//                 photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
//                 followed: false, fullName: "Andrew", status: "I'm developer", location: {city: "Samara", country: "Russia"}},
//             {id: '2',
//                 photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
//                 followed: false, fullName: "Alexander", status: "ah, shit!", location: {city: "Moscow", country: "Russia"}},
//             {id: '3',
//                 photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
//                 followed: true, fullName: "Artem", status: "London is the capital of Great Britain", location: {city: "St.Petersberg", country: "Russia"}},
//             // {id: 4,
//             // photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
//             // followed: true, fullName: "Kate", status: "I'm so tired", location: {city: "Samara", country: "Russia"}},
//         ],
//     },
//     _callSubscriber(store: StoreType) {
//     },
//     getState() {
//         return this._state
//     },
//
//     subscribe(observer: (store: StoreType) => void) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//
//         this._callSubscriber(this);
//
//     }
// }