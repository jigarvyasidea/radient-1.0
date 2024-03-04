import React from "react";

const SingleMentors = ({ mentor }) => {
  return (
    <>
      <div className="nft">
        <div className="main">
          <img
            className="tokenImage"
            src={mentor?.image}
            alt={mentor?.name}
            loading="lazy"
          />
          <div className="mentor__info">
            <h2>{mentor?.name}</h2>
            <p className="description">{mentor?.designation}</p>
            <p className="description">{mentor?.company}</p>
          </div>
          <hr />
         
        </div>
      </div>
    </>
  );
};

export default SingleMentors;
