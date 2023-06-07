import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function InputLink() {
  const [link, setLink] = useState();
  const [link2, setLink2] = useState();

  const handleChangeInput = (e) => {
    setLink(e.target.value);
  };

  const handleInputLink = (e) => {
    setLink2(link);
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div
          style={{
            width: "50%",
            height: "20%",
            backgroundColor: "#e9692c",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            padding: "20px",
            color: "white",
          }}
        >
          <h1 className="text-center">Input Link</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Input Link"
              aria-label="Input Link"
              aria-describedby="button-addon2"
              onChange={handleChangeInput}
            />
            <button
              className="btn btn-outline-light"
              type="button"
              id="button-addon2"
              onClick={handleInputLink}
            >
              ADD
            </button>
            {/* {link2} */}
          </div>
          <div className="container d-flex justify-content-center">
            <p>
              <Link to="/OtherWeb" className="btn btn-light mx-3" state={{ from : link2}}>
                OtherWeb
              </Link>
            </p>

            <p>
              <Link to="/otherheatmap" className="btn btn-light mx-3" state={{ from : link2}}>
                Other Heatmap
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
