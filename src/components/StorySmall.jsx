import React from "react";

const StorySmall = ({ story }) => {
    const {name, author, location, text, image} = story;
  return <div className="story-small">
      {author}
  </div>;
};

export default StorySmall;
