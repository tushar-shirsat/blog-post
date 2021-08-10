import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { db } from "./firebase";
import './css/Article.css';
import moment from 'moment'

const Article = () => {
    const {postId} =useParams();
    const [story,setStory] = useState({});
    useEffect(() => {
        db.collection("posts")
          .doc(postId)
          .onSnapshot((snapshot) => {
            setStory(snapshot.data())
          });
      }, []);
      console.log(story);
    return (
        <article className="article">
            <div className="article__title-container">
                <h2 className="article__title">{story?.title?.caption}</h2>
                {story?.title?.titleUrl && <img src={story?.title.titleUrl} alt="" className="title__img" />}
            </div>
        <p style={{fontSize: '1.8rem', color:"#aaa", marginBottom: '1rem',borderBottom: '1px solid #aaa'}}>Published {moment.unix(story?.tiemstamp?.seconds).format('MMMM Do YYYY, h:mma') }</p>
            <div className="article__story-container">
                {
                    story?.story?.captionUrl.map((item,index) =>{
                        return(
                            <>
                                <img src={item} alt="" className="story__img" />
                                <p className="story__caption">{story?.story.caption[index]}</p>
                            </>
                        )
                    })
                }
            </div>
        </article>
    )
}

export default Article
