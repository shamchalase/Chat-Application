import React from "react";
import {
  FaRegImages,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";

const CreateTwitte = () => {
  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src="/images/profile.jpg" alt="profile img" />
        </div>
        <div className="create__input">
          <input
            type="text"
            className="craete__control"
            placeholder="what's happining?"
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImages className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
            <a href="">Tweet</a>
        </div>
      </div>
    </div>
  );
};

export default CreateTwitte;
