import React from 'react';
import HomePost from './componant/HomePost';
import { useProvider } from './context';
import './css/Blog.css';

const Blog = () => {
    const [{stories}] = useProvider();
    console.log(stories);
    return (
        <section className="blog">
            {
               stories?.map((story) => <HomePost key={story.id} story={story}/>) 
            }
        </section>
    )
}

export default Blog
