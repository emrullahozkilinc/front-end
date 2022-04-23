import React from "react";
import PropTypes from "prop-types"

function Navbar(props) {
    return (
        <div className="container">
            <h4>Navbar: {props.title}
                <i className="fa-solid fa-user"></i></h4>
            <i className="fa-brands fa-github-square fa-2xl"></i>
        </div>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Varsayılan değer"
}
export default Navbar;