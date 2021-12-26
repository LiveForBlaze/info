import "../App.css";
import { TopicItem } from "./TopicItem";

export const Topic = ({ title, data, onClick, isOpened }) => {
  return (
    <div>
      <div className="topic" onClick={onClick}>
        {title}
      </div>
      {isOpened && (
        <div className="subtopics">
          {data?.map((item) => (
            <TopicItem data={item} />
          ))}
        </div>
      )}
    </div>
  );
};
