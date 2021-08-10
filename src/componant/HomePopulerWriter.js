import React from 'react'
import '../css/HomePopulerWriter.css'

const HomePopulerWriter = () => {
    return (
        <article style={{background: "url('http://demo.shapedtheme.com/kotha-pro-html/assets/images/about-me-bg.jpg')",backgroundColor: '#fff',backgroundRepeat: 'no-repeat',backgroundSize:'100%'}}>
            <div className="about-me-content">
                <img src="http://demo.shapedtheme.com/kotha-pro-html/assets/images/me.jpg" alt="" className="about-me-content-img" />
                <h2 className="author-name">tushar shirsath</h2>
                <p style={{fontSize:'1.6rem', textAlign:'center',fontWeight: '400',color: "#aaa", lineHeight:'150%',marginTop:'1rem'}}>Tushar Shirsaht is an enthusiastic and passionate Story Teller. He loves to do different home-made things and share to the world.</p>
            </div>
        </article>
    )
}

export default HomePopulerWriter
