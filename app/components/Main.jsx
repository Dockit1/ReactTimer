const React = require('react');
const Nav = require('Navigation');

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;