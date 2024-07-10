import React from "react";

const HeaderTop = () => {
  return (
    <div className="header-top" style={{}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 d-none d-md-block">
            <div className="phone-email">
              <div className="phone">
                {" "}
                <i className="zmdi zmdi-phone" />
                +019 (88) 25184203{" "}
              </div>
              <div className="email">
                {" "}
                <a href="mailto:company@domain.com">
                  <i className="zmdi zmdi-email-open" />
                  company@domain.com
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="login-register">
              <div className="login">
                {" "}
                <a href="#">
                  <i className="zmdi zmdi-account" />
                  Login
                </a>{" "}
              </div>
              <div className="register">
                {" "}
                <a href="#">
                  <i className="zmdi zmdi-accounts-add" />
                  Register
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
