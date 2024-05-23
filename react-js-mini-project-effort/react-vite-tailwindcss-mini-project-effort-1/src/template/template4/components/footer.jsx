import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="copyright">
            <div className="inside-container">
            <div className="row">
                <div className="col-md-6 order-2 order-md-12">
                <p>
                    &copy; {new Date().getFullYear()} All Rights Reserved. Created by{" "}
                    <a href="https://www.webdomus.net/" className="created-by">
                    Web Domus Italia
                    </a>
                </p>
                </div>
                <div className="col-md-6 social order-1 order-md-12">
                <a href="#">
                    <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                    <i className="fab fa-twitter" />
                </a>
                <a href="#">
                    <i className="fab fa-google-plus-g" />
                </a>
                <a href="#">
                    <i className="fab fa-linkedin-in" />
                </a>
                </div>
            </div>
            </div>
        </div>
    </footer>

  )
}
