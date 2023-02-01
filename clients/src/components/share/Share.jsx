import "./share.scss";
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material"
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Share() {

  const {user,url,PF}  = useContext(AuthContext)
  const desc = useRef()
  const [file, setFile] = useState(null);

  const submitHandler = async (e)=>{
    e.preventDefault();
    const newPost={
      userId: user._id,
      desc:desc.current.value,
    }
    try{
      await axios.post(url+"posts", newPost);
    }catch(err){

    }
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={"profile/"+user.username}>
          <img className="shareProfileImg" src={PF+"person/7.jpeg"} alt="" />
          </Link>
          <input
            placeholder={`What's in your mind ${user.username} ?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr"/>
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    <input type="file" style={{display:"none"}} id="file" accept=".png, .jpeg, .jpg" onChange={(e)=>setFile(e.target.files[0])} />
                </label>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}
