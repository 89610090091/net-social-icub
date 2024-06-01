import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSHzVn5cWMiZSrj80a00wyZaMA5rrtwYgagbOFCg1nCp1OHLF-uBL51qn8S_dKc3XPtg&usqp=CAU" alt="" />
            </div>
            <div>ava + description</div>
            <MyPost />
        </div>
    )
}

export default Profile;