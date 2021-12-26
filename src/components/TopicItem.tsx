export const TopicItem = ({ data, previuosHeader }) => {
  console.log(data);
  return (
    <div className="topicItem">
      <div className="topicHeader">
        {previuosHeader !== data.header && data.header}
      </div>
      <div className="topicTitle">{data.title}</div>
      <div
        className="topicText"
        dangerouslySetInnerHTML={{ __html: data.text }}
      />
    </div>
  );
};
