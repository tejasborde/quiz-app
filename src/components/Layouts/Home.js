import React from "react";
// import { ExcelRenderer } from "react-excel-renderer";

const Home = () => {
  // const fileHandler = (event) => {
  //   let fileObj = event.target.files[0];

  //   ExcelRenderer(fileObj, (err, resp) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       const questions = [];

  //       resp.rows.map((row, index) => {
  //         if (
  //           row[0] !== undefined &&
  //           row[0] !== null &&
  //           row[1] !== undefined &&
  //           row[1] !== null
  //         ) {
  //           questions.push({
  //             que_no: row[0],
  //             correct_ans: row[1],
  //           });
  //         }
  //       });

  //       console.log(questions);
  //     }
  //   });
  // };

  return (
    <div className="home">
      <div className="container home-header">
        <h1>My Quiz App</h1>
        {/* <input
          type="file"
          required={true}
          onChange={fileHandler}
          style={{
            padding: "10px",
            border: "0.01rem solid gray",
          }}
          accept=".xlsx,.csv"
        /> */}
      </div>
    </div>
  );
};

export default Home;
