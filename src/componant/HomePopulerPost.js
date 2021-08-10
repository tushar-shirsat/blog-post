import React from 'react';
import '../css/HomePopulerPost.css'

const HomePopulerPost = ({imgUrl,title,date}) => {
    return (
        <article className="homePopulerPost">
            <img src={imgUrl} alt="populer-post" className="homePopulerPost__img" />
            <div className="HomePopulerPost__info">
                <h3 className="homePopulerPost__title">{title}</h3>
                <p className="homePopulerPost__post-date">{date}</p>
            </div>
        </article>
    )
}

export default HomePopulerPost
