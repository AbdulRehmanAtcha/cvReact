import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div className="main">
      <div className="cv">
        <div className="name">
          <h2 className="first">Abdul</h2>
          <h2 className="last">&nbsp; &nbsp;Rehman.</h2>
        </div>
        <br />
        <div className="info">
          <div className="email">
            <h4 className="first">Email:</h4>
            <h4 className="last">abdulrehman1239091@gmail.com</h4>
          </div>
          <div className="address">
            <h4 className="first">Address:</h4>
            <h4 className="last">Gulistan e jauhar block 16 Karachi.</h4>
          </div>
        </div>
        <br />
        <hr />
        <h2 className="heading">Education:</h2>
        <div className="education">
          <div className="matric">
            <div className="matric-name">
              <h2 className="first">Matric</h2>
            </div>
            <div className="matric-year">
              <h2 className="first">2018</h2>
            </div>
            <div className="matric-grade">
              <h2 className="last">A-one</h2>
            </div>
          </div>
          <div className="inter">
            <div className="inter-name">
              <h2 className="first">Intermediate</h2>
            </div>
            <div className="inter-year">
              <h2 className="first">2020</h2>
            </div>
            <div className="inter-grade">
              <h2 className="last">A</h2>
            </div>
          </div>
          <div className="uni">
            <div className="uni-name">
              <h2 className="first">University</h2>
            </div>
            <div className="uni-year">
              <h2 className="first">2021-2024</h2>
            </div>
            <div className="uni-grade">
              <h2 className="last">3.0 G.P.A</h2>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <h2 className="heading">Skills:</h2>
        <div className="skills">
          <h2>HTML</h2>
          <h2>CSS</h2>
          <h2>Bootstrap</h2>
          <h2>JavaScript</h2>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
