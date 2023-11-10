import {Post} from "./Post";
import "./PostsList.css";
import {NewPost} from "./NewPost";

export function PostsList() {
    return (
        <>
            <NewPost/>
            <ul className="posts">
                <Post author="Moe" body="Hell ye!"/>
                <Post author="Pape" body="SHIIII"/>
            </ul>
        </>
    )
}