import React from "react";
import { Image, Container } from 'react-bootstrap'

const StoryBig = ({ story}) => {
  const {author, badge, text, image } = story;
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
            <button className="bg-transparent text-white border-0 mt-5">share your own story!</button>
            <Image src="/images/vector 3.png"/>
          </div>
        </div>
        <div className="story-image position-relative">
          <Image src={image} fluid />
          <div className="eclipse"></div>
        </div>
      </Container>
    </div>
  );
};

export default StoryBig;
