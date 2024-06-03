import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div>
            MyPost
            <div>
                <textarea name="hello" id=""></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post message='hello, how are you?' like='12' />
                <Post message='Its my page App' like='25' />
            </div>
        </div>
    )
}

export default MyPost;