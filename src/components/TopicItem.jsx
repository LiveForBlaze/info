import { memo } from 'react';
import { IMAGES } from "../images";

export const TopicItemComponent = ({ data, previuosHeader }) => {
  return (
    <div className="topicItem">
      {previuosHeader !== data.header && (
        <div className="topicHeader">{data.header}</div>
      )}
      <div className="topicTitle">{data.title}</div>
      <div
        className="topicText"
        dangerouslySetInnerHTML={{ __html: data.text }}
      />
      {data.img && <div className="image" style={{ backgroundImage: `url(${IMAGES[data.img]})`, height: data.height || 0}} />}
    </div>
  );
};

export const TopicItem = memo(TopicItemComponent);
