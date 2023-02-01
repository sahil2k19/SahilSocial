import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useContext, useEffect ,useState} from "react";
import axios from "axios";
import {useParams} from "react-router"
import { AuthContext } from "../../context/AuthContext";




export default function Profile() {

  const {url , user:userObject}  = useContext(AuthContext);

  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  // taking username from url
  const username = useParams().username; 
  console.log(username);

  useEffect(()=>{
    const fetchUser = async ()=>{
      const res = await axios.get(`${url}users?username=${username}`)
      // console.log(res.data);
      setUser(res.data);
    }
    fetchUser();
  },[username])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture||`${PF}/person/7.jpeg`}

                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture||`${PF}/person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user ={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
