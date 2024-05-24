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
            <div className={s.post}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPost;

