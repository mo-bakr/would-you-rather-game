import React from "react"
import { connect } from "react-redux"

function MeowsWall({ meowers, organizedIDS }) {
  return (
    <ul>
      {organizedIDS && organizedIDS.map(function (id) {
        const { name, kittyPic, meowerPolls, meows } = meowers[id];

        return (
          <li key={id} className="poll">
            <p className="meowerpoll">{name}</p>

            <div className="pollBox">
              <img src={kittyPic} alt={"PFP of " + name} />

              <div className="pollOption">
                <p className="LP">Polls: {meowerPolls.length}</p>
                <p className="LP">Meows: {Object.keys(meows).length}</p>
                <p className="LP">Total: {meowerPolls.length + Object.keys(meows).length}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function mapStateToProps({ meowers }) {
  return ({
    meowers, organizedIDS: Object.keys(meowers).sort(function (x, y) {
      return (
        Object.keys(meowers[y].meows).length + meowers[y].meowerPolls.length)
        -
        (Object.keys(meowers[x].meows).length + meowers[x].meowerPolls.length);
    })
  });
}

export default connect(mapStateToProps)(MeowsWall)