import React, { Component, Fragment } from "react";
import { Card, CardTitle, Col, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth } = this.props.context.userData;
    console.log(this.props);
    // if (!auth){

    // this.props.history.push('/')
    // }

    // console.log('props',   this.props)
    // console.log(auth)

    return (
      <Col className="sidebar" lg="2">
        {auth ? (
          <Fragment>

          <Nav vertical className="nav">
            <Link
              to="/dashboard/documents" >
              <div className="dash-logo"></div>
            </Link>

            <i className="fa fa-user" aria-hidden="true"></i>
            <div className="user">Hello, { this.props.context.userData.username }</div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/dashboard/documents"
            >

              <div className="link-mod documents">
                <i className="far fa-file" />
                <div>Documents</div>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/dashboard/billing"
            >
              <div className="link-mod billing">
                <i className="fas fa-money-bill-wave-alt" />
                <div>Billing</div>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/dashboard/settings/options"
            >
              <div className="link-mod setting">
                <i className="fas fa-cogs" />

                <div>Settings</div>
              </div>
            </Link>

            <Link onClick={() => localStorage.removeItem("token")}
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="link-mod">
                <i className="fa fa-power-off" />
                <div>Log Out</div>
              </div>
            </Link>
          </Nav>

          </Fragment>
        ) : (
          this.props.history.push("/dashboard/create")
        )}
      </Col>
    );
  }
}
export default Dashboard ;
