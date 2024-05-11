import React from "react";
import team from "../Images/pic.jpeg";
import data from "./Teamdata";
export default function Team() {
  return (
    <div className="w3-container mt-5 mb-5" id="team">
      <h3 className="mb-5 w3-center w3-xlarge">
        <b>THE TEAM</b>
      </h3>
      <p className="w3-center w3-xlarge">
        <b>Persons who run this company</b>
      </p>
      {data.length > 0 && (
        <div>
          {data.map((member, index) => (
            <div className="" style={{ marginTop: 64 }}>
              <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="mx-2 border border-secondary w3-card rounded-lg">
                  <img
                    src={team}
                    alt={member.name}
                    style={{ width: "100%" }}
                    className="w3-hover-opacity px-1 rounded-lg"
                  />
                  <div className="w3-container w3-grayscale">
                    <div>
                      <br />
                      <h4>
                        <b>{member.name}</b>
                      </h4>
                      <br />
                      <p className="bg-light px-2 py-2">
                        <b>{member.position}</b>
                      </p>
                      <br />
                      <p>{member.para}</p>
                      <br />
                      <p>
                        <button className="w3-button w3-light-grey w3-block">
                          <i className="fa fa-phone" />
                          &nbsp;&nbsp;{member.number}
                        </button>
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
