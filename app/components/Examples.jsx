var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-centered">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Edgewater,FL">Edgewater, FL</Link>
        </li>
        <li>
          <Link to="/?location=Indianapolis,IN">Indianapolis, IN</Link>
        </li>
      </ol>
    </div>
)
};

module.exports = Examples;
