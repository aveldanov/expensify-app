import React from 'react';



const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the Expense Page with id of {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;