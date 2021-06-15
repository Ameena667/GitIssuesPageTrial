import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
//import issueDisplay from "./issueDisplay";

const columns = [
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
    render: (value) => <Link to={`issues/${value}`}>{value} </Link>,
  },
  {
    title: "title",
    dataIndex: "title",
    key: "title",
  },
];

class GithubIssues extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      issues: [],
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/repos/octocat/Hello-World/issues")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          issues: data,
        })
      );
  }

  render() {
    console.log(this.state.issues);
    return (
      <div>
        <>
          <h1>List of issues with pagination...</h1>
          <Table dataSource={this.state.issues} columns={columns} />
        </>
      </div>
    );
  }
}

export default GithubIssues;
