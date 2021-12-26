export const TopicItem = ({ data }) => {
  console.log(data);
  return (
    <div className="topicItem">
      <div className="topicHeader">{data.header}</div>
      <div className="topicTitle">{data.title}</div>
      <div
        className="topicText"
        dangerouslySetInnerHTML={{ __html: data.text }}
      />
    </div>
  );
};
