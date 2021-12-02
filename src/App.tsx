import React, {ChangeEvent} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
// import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state, {ActionsTypes, addPostAC, changeNewTextAC, ProfilePageType, RootStateType} from "./redux/state";
import {PostType, StoreType} from "./redux/state";
import store from "./redux/state";

// type StateProp = {
//     state: RootStateType
// }

export type PropsType = {
    store: StoreType
<<<<<<< HEAD
}

type MessageType = {
    posts: Array<PostType>;
     message: string;
    changeNewTextCallback: (newText: string) => void;
    dispatch: (action: ActionsTypes) => void;
    addPostCallback: (message: string) => void;
}

=======
}

type MessageType = {
    posts: Array<PostType>;
     message: string;
    changeNewTextCallback: (newText: string) => void;
    dispatch: (action: ActionsTypes) => void;
    addPostCallback: (message: string) => void;
}

>>>>>>> 15ad6b3652f052768b7fd32008fcc480a721094e
const App: React.FC<PropsType> = (props) => {
    const state = store.getState()

    let message = state.profilePage.posts[0].message

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <BrowserRouter>
                    <div>
                        <Route path={"/hello"} render={() => <HelloMessage
                            dispatch={props.store.dispatch.bind(props.store)}
                            posts={state.profilePage.posts}
                            message={state.profilePage.messageForNewPost}
                            addPostCallback={props.store.addPost.bind(props.store)}
                            changeNewTextCallback={props.store.changeNewText.bind(props.store)}
                        />}/>
                    </div>
<<<<<<< HEAD
                </BrowserRouter>
            </div>
        </div>
    )

=======
                    <div>

                            </div>
                </BrowserRouter>
            </div>
        </div>
    )

>>>>>>> 15ad6b3652f052768b7fd32008fcc480a721094e
    function HelloMessage(props: MessageType) {
        const addPost = () => {
             // props.addPostCallback(props.message)
            props.dispatch(addPostAC(props.message))
            props.dispatch(changeNewTextAC(props.message))
        }
        const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.changeNewTextCallback(e.currentTarget.value)
        }

// 31-34
//
        return <div>
            {props.message}
            <hr/>
            {props.posts.map(p => <div key={p.id}>{p.message}</div>)}
            <hr/>
            <textarea value={props.message}
                      onChange={newTextChangeHandler}
            >
                </textarea>
            <button onClick={addPost}>add post</button>
        </div>

    }
}
    export default App