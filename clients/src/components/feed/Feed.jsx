import { useState,useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios"
import "./feed.css";
// import { Posts } from "../../dummyData";

export default function Feed() {
  const [Posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchAllPost = async()=>{
      const res = await axios.get("http://localhost:3001/api/posts/timeline/63ce0f0b185c5919c63ebdc6")
      console.log(res.data);
      setPosts(res.data);
    }
      fetchAllPost();
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p,index) => {
          return <Post key={index} post={p} />
        })} */}
      </div>
    </div>
  );
}
