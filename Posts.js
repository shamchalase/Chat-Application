import React from "react";
import { GoVerified } from "react-icons/go";
import {FaComment,FaHeart} from "react-icons/fa";
import {FiRepeat,FiDownload} from "react-icons/fi";

const Posts = () => {
  return (
    <div className="postss">
      <div className="posts__first">
        <div className="posts__first__img">
          <img src="/images/profile.jpg" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Sham chalase</strong>
          <GoVerified className="verify" />
        </div>
        <div className="posts__first__username">
          @samhere03<span>6min</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          The 2011 ICC Cricket World Cup was the tenth Cricket World Cup. It was
          played in India, Sri Lanka, and (for the first time) Bangladesh. India
          won the tournament, defeating Sri Lanka by 6 wickets in the final at
          Wankhede Stadium in Mumbai, thus becoming the first country to win the
          Cricket World Cup final on home soil.
        </div>
        <div className="postss__details__img">
          <img src="/images/post.jpg" alt="post" />
        </div>
        <div className="reactions">
            <span><FaComment className="re"/>45</span>
            <span><FiRepeat className="re" />4</span>
            <span><FaHeart className="re"/>541</span>
            <span><FiDownload className="re" />234</span>
        </div>
      </div>
      
    </div>

    
  );
};

export default Posts;
