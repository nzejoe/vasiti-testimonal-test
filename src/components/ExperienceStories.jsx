import React from "react";
import { Container, Row } from "react-bootstrap";

import StoryBig from "./StoryBig";
import StorySmall from "./StorySmall";

// assets
import { stories } from "../assets";

const ExperienceStories = () => {
  return (
    <div className="experience-stories">
      <div className="section-1">
        <StoryBig story={stories[0]} />
        <Container className="story-small-list ">
          <Row md={3}>
            {stories.slice(1, 7).map((story) => {
              return <StorySmall key={story.id} story={story} />;
            })}
          </Row>
        </Container>
        <div className="stories-small"></div>
      </div>
    </div>
  );
};

export default ExperienceStories;
