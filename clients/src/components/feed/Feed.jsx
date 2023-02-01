import { useState,useEffect, useContext } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios"
import "./feed.css";
import { AuthContext } from "../../context/AuthContext";
// import { Posts } from "../../dummyData";


export default function Feed({username}) {
  
  const {user, url} = useContext(AuthContext);
  
  const [posts, setPosts] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  

  useEffect(()=>{
    const fetchAllPost = async()=>{
      const res = username? await axios.get(`${url}posts/profile/${username}`)
      :await axios.get(`${url}posts/timeline/${user._id}`)
      // console.log(res.data);
      setPosts(res.data);
    }
      fetchAllPost();
  },[username,user._id])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p,index) => {
          return <Post key={p._id} post={p} url = {url}/>
        })}
      </div>
    </div>
  );
}

