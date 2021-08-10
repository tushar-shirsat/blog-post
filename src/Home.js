import React from "react";
import HomePopulerPost from "./componant/HomePopulerPost";
import HomePopulerWriter from "./componant/HomePopulerWriter";
import HomePost from "./componant/HomePost";
import { useProvider } from "./context";

const Home = () => {
  const [{stories}] = useProvider();
  return (
    <div className="home">
      <h2 className="home__title">Tushar Pro</h2>
      <section className="article-section">
        <div className="article-section-left">
          <HomePost story={stories[0]} />
          <HomePost story={stories[1]} />
        </div>
        <div className="article-section-right">
          <HomePopulerWriter />
          <div className="home-pupuler-post">
            <h3
              style={{
                marginBottom: "2rem",
                fontSize: "1.6rem",
                fontWeight: "bold",
                textAlign: "center",
                color: "#aaa",
                textTransform: "uppercase",
              }}
            >
              populer post
            </h3>
            <HomePopulerPost
              imgUrl="http://demo.shapedtheme.com/kotha-pro-html/assets/images/p-1.jpg"
              title="ICE-CREAM WITH CHALK TASTE"
              date="February 15, 2020"
            />
            <HomePopulerPost
              imgUrl="http://demo.shapedtheme.com/kotha-pro-html/assets/images/p-2.jpg"
              title="THE MOMENT OF MANGO BAR"
              date="February 15, 2020"
            />
            <HomePopulerPost
              imgUrl="http://demo.shapedtheme.com/kotha-pro-html/assets/images/p-3.jpg"
              title="HOMEMADE HERBAL BLACK TEA"
              date="February 15, 2020"
            />
          </div>

          <div className="home-latest-post home-pupuler-post">
          <h3
              style={{
                marginBottom: "2rem",
                fontSize: "1.6rem",
                fontWeight: "bold",
                textAlign: "center",
                color: "#aaa",
                textTransform: "uppercase",
              }}
            >
              LATEST POSTS

              </h3>
              <HomePopulerPost
              imgUrl="http://demo.shapedtheme.com/kotha-pro-html/assets/images/recent-1.jpg"
              title="A MARINE DIVE FROM SKY"
              date="February 15, 2020"
            />
              <HomePopulerPost
              imgUrl="	http://demo.shapedtheme.com/kotha-pro-html/assets/images/recent-2.jpg"
              title="SMALL MEETING ROOM"
              date="February 15, 2020"
            />
              <HomePopulerPost
              imgUrl="http://demo.shapedtheme.com/kotha-pro-html/assets/images/recent-3.jpg"
              title="SELFIE FROM THE BEACH POINT"
              date="February 15, 2020"
            />
              <HomePopulerPost
              imgUrl="http://demo.shapedtheme.com/kotha-pro-html/assets/images/recent-4.jpg"
              title="GATHER SOME ARTIST PENCILS."
              date="February 15, 2020"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
