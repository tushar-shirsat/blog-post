import React from 'react'
import Story from './componant/Story'
import { useProvider } from './context'

const Stories = () => {
    const [{stories}] = useProvider();
    return (
        <div className="stories">
            <h1>Your stories</h1>
            {stories &&
            (stories.map((story) => <Story key={story.id} story={story}/>))}
            
        </div>
    )
}

export default Stories
