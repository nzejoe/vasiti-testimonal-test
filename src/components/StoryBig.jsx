import React, { useState } from "react";
import { Image, Container } from 'react-bootstrap'

import ShareStory from "./ShareStory";

const StoryBig = ({ story, addStoryHandler }) => {
  const [ isEditing, setIsEditing ] = useState(false);
  const {author, badge, text, image } = story;

  const handleSetEditing = (bool) => {
    setIsEditing(bool);
  }

  return (
    <div className={`story-big pt-5`}>
      <Container className="story-inner d-md-flex align-items-center  justify-content-between">
        <div className="story-info p-5">
          <div className="info-header">
            <h3 className="mb-0">{`${author}’s Experience`}</h3>
            <p className="badge">{badge}</p>
          </div>
          <div className="info-text">
            <p>{text}</p>
          </div>
          <div className="share-btn text-white">
            <button
              className="bg-transparent text-white border-0 mt-5"
              onClick={() => handleSetEditing(true)}
            >
              share your own story!
            </button>
            <Image src="/images/vector 3.png" fluid />
          </div>
        </div>
        <div className="story-image position-relative">
          <Image src={image} fluid />
          <div className="eclipse"></div>
        </div>
      </Container>
      {isEditing && (
        <ShareStory
          handleEditing={handleSetEditing}
          isEditing={isEditing}
          addStoryHandler={addStoryHandler}
        />
      )}
    </div>
  );
};

export default StoryBig;
