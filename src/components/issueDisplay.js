import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://api.github.com/repos/octocat/Hello-World/issues/";

const IssueDisplay = () => {
  let { id } = useParams();
  //console.log(url + id);
  const [issueData, setIssueData] = useState([]);
  useEffect(() => {
    fetch(url + id)
      .then((response) => response.json())
      .then((data) => setIssueData(data));
  }, [id]);
  const subHeadings = [
    "Details : ",
    "Status : ",
    "CreatedAt : ",
    "UpdatedAt : ",
  ];
  const { body, state, created_at, updated_at } = issueData;
  const subHeadingsData = [body, state, created_at, updated_at];
  return (
    <div id="parentDiv">
      {console.log(issueData)}
      {/*<h3>ID: {id}</h3>*/}

      <h2>
        IssueId:#{issueData.number} {"   "}
        {issueData.title}
      </h2>

      <div id="childDiv">
        {subHeadings.map((details, index) => (
          <p>
            <b>{details}</b>
            {subHeadingsData[index]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default IssueDisplay;
