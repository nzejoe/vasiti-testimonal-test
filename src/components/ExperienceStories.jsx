import React, { useState } from 'react'

import StoryBig from './StoryBig';

// assets
import { stories as assetStories } from '../assets';

const ExperienceStories = () => {
  const [stories, setStories] = useState(assetStories);
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

        </div>
      </div>
    </div>
  );
}

export default ExperienceStories;