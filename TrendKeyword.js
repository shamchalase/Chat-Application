import React from "react";

const TrendKeyword = () => {
  const [state, setstate] = React.useState([
    {
      id: 1,
      country: "Trend in India",
      keyword: "ISPR",
      totalkeywords: "2000K",
    },
    {
      id: 2,
      country: "Trend in India",
      keyword: "SHAMCHALASE",
      totalkeywords: "3000K",
    },
    {
      id: 3,
      country: "Trend in India",
      keyword: "YoutubeinIndia",
      totalkeywords: "5000K",
    },
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h4>Trend for you</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword__name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalkeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendKeyword;
