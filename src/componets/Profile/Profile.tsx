import MyPost from './Profile.module.css';
import s from './Profile.module.css';

const Post = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSHzVn5cWMiZSrj80a00wyZaMA5rrtwYgagbOFCg1nCp1OHLF-uBL51qn8S_dKc3XPtg&usqp=CAU" alt="" />
            </div>
            <div>ava + desction</div>
        </div>
    )
}

export default Post;