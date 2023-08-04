import React from "react";

interface Props {
  data: string;
}

const StoryContent: React.FC<Props> = ({ data }) => {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

export default StoryContent;
