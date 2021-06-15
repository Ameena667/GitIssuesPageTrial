const FilterImpData = (props) => {
  const { updateIssuesImpData } = props;
  let tempIssues = [];

  props.issues.map((issue) => (
    <>
      {tempIssues.push({
        IssueID: issue.number,
        Title: issue.title,
      })}
    </>
  ));

  return (
    <>
      {console.log(tempIssues)}
      {updateIssuesImpData(tempIssues)}
      <h1>hi</h1>
    </>
  );
};
export default FilterImpData;
//{props.updateIssuesImpData(tempIssues)}
