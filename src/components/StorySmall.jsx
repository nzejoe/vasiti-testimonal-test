import React from "react";
import { Card, Image, Col } from "react-bootstrap";

const StorySmall = ({ story }) => {
    const {author, badge, location, text, image} = story;
  return (
    <Col>
      <Card
        style={{ width: "18rem" }}
        className="story-small m-auto mb-5 border-0"
      >
        <Image src={image} fluid roundedCircle className="p-3" width={200} />
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Subtitle className="d-flex align-items-center text-upper mb-3">
            {location && <div className="location me-2">{`in ${location}`}</div>}
            <div className={`story-badge story-badge-${badge}`}>
              {badge}
            </div>
          </Card.Subtitle>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default StorySmall;
