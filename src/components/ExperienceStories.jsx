import React from 'react'

import StoryBig from './StoryBig';

// assets
import { stories } from '../assets';

const ExperienceStories = () => {
  return (
    <div className="experience-stories">
      <div className="section-1">
        <StoryBig
          author={stories[0].author}
          badge={stories[0].badge}
          text={stories[0].text}
          image={stories[0].image}
          className="text-white"
        />
        <div className="stories-small">
          {stories.slice(1,7).map(story=>{
            console.log(story)
            return null
          })}
        </div>
        <div className="stories-small">

        </div>
      </div>
    </div>
  );
}

export default ExperienceStories;