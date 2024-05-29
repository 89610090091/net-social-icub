import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="data:image/png;base64,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" alt="" />
            post1
        </div>
    )
}

export default Post;

