import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div>
            MyPost
            <div>
                <textarea name="hello" id=""></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div>
                <Post message='hello, how are you?' likecount='12' />
                <Post message='Its my page App' likecount='25' />
            </div>
        </div>
    )
}

export default MyPost;

