import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import moment from "moment";
import "../css/HomePost.css";
import { NavLink } from "react-router-dom";

const HomePost = ({ story }) => {
  return (
    <article className="homePost">
      <img
        src={
          story?.data.title.titleUrl
            ? story?.data.title.titleUrl
            : story?.data.story.captionUrl[0]
        }
        alt=""
        className="homePost__img"
        style={{ maxHeight: "400px" }}
      />
      <div className="blog-content">
        <h3 className="homePost__title">{story?.data.title.caption}</h3>
        <p className="homePost__article">
          {story?.data.story.caption[0].length > 300
            ? story?.data.story.caption[0].slice(0, 300) + "..."
            : story?.data.story.caption[0]}
        </p>
        <p className="link">
          <NavLink to={`/article/${story?.id}`} className="homePost__main-link">
            continue reading
          </NavLink>
        </p>

        <div className="homePost__articel-info">
          <p className="homePost__date">
            By Tushar On{" "}
            {moment
              .unix(story?.data?.tiemstamp?.seconds)
              .format("MMMM Do YYYY, h:mma")}
          </p>
          <div className="homePost__social-handles">
            <FacebookIcon className="social-icone" />
            <InstagramIcon className="social-icone" />
            <TwitterIcon className="social-icone" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomePost;
