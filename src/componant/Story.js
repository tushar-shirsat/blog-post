import React from "react";
import moment from "moment";
import "../css/Story.css";
import { db } from "../firebase";
import { NavLink, useHistory } from "react-router-dom";

const Story = ({ story }) => {
  const history = useHistory();
  const handleClick = (id) => {
    db.collection("posts").doc(id).delete();
  };
  return (
    <article className="story">
      <NavLink
        to={`/article/${story?.id}`}
        style={{ color: "#000", textDecoration: "none" }}
      >
        <h2 className="story__title">{story?.data.title.caption}</h2>
      </NavLink>
      <div className="story__btn-container">
        <button className="stroy__btn" onClick={() => history.push(`/story/${story?.id}`)}>Edit</button>
        <button className="stroy__btn" onClick={() => handleClick(story?.id)}>
          Delete
        </button>
      </div>
      <p className="story__date">
        Published about {moment(story?.data.tiemstamp.seconds * 1000).fromNow()}
      </p>
    </article>
  );
};

export default Story;
