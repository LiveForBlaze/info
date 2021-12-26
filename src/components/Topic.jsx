import "../App.css";
import { TopicItem } from "./TopicItem";

export const Topic = ({ title, filter, data, onClick, isOpened }) => {
  const filteredData = data?.filter(
    (item) =>
      item.title?.toLowerCase().includes(filter) ||
      item.header?.toLowerCase().includes(filter)
  );

  return (
    <div>
      <div className="topic" onClick={onClick}>
        {title}
      </div>
      {isOpened && (
        <div className="subtopics">
          {filteredData?.map((item, itemIndex) => (
            <TopicItem
              data={item}
              previuosHeader={filteredData[itemIndex - 1]?.header}
            />
          ))}
        </div>
      )}
    </div>
  );
};
