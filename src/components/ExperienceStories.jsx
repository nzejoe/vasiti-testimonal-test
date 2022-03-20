import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import StoryBig from "./StoryBig";
import StorySmall from "./StorySmall";

// assets
import { stories as storyData} from "../assets";

const ExperienceStories = () => {
  const [stories, setStories] = useState(storyData);

  const addStory = (data) => {
    setStories(prevStories=>{
      return [...prevStories, data];
    })
  }

  return (
    <div className="experience-stories">
      <div className="section-1">
        <StoryBig story={stories[0]} addStoryHandler={addStory} />
        <Container className="story-small-list pt-5">
          <Row md={3}>
            {stories.slice(1, 7).map((story) => {
              return <StorySmall key={story.id} story={story} />;
            })}
          </Row>
        </Container>
      </div>
      <div className="section-2">
        <StoryBig story={stories[7]} addStoryHandler={addStory} />
        <Container className="story-small-list pt-5">
          <Row md={3}>
            {stories.slice(8, 14).map((story) => {
              return <StorySmall key={story.id} story={story} />;
            })}
          </Row>
        </Container>
      </div>
      {stories.length > 14 && (
        <div className="section-1">
          <StoryBig story={stories[14]} addStoryHandler={addStory} />
          <Container className="story-small-list pt-5">
            <Row md={3}>
              {stories.slice(15, -1).map((story) => {
                return <StorySmall key={story.id} story={story} />;
              })}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ExperienceStories;
