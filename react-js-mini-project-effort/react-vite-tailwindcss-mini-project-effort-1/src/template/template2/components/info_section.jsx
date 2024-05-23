import React from 'react'

export default function InfoSection() {
  return (
    <>
      <section className="info_section layout_padding">
        <div className="container">
            <div className="info_contact">
            <div className="row">
                <div className="col-md-4">
                <a href="">
                    <img src="images/location-white.png" alt="" />
                    <span>Passages of Lorem Ipsum available</span>
                </a>
                </div>
                <div className="col-md-4">
                <a href="tel:+012334567890">
                    <img src="images/telephone-white.png" alt="" />
                    <span>Call : +012334567890</span>
                </a>
                </div>
                <div className="col-md-4">
                <a href="mailto:demo@gmail.com">
                    <img src="images/envelope-white.png" alt="" />
                    <span>demo@gmail.com</span>
                </a>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-8 col-lg-9">
                <div className="info_form">
                <form action="">
                    <input type="text" placeholder="Enter your email" />
                    <button>subscribe</button>
                </form>
                </div>
            </div>
            <div className="col-md-4 col-lg-3">
                <div className="info_social">
                <div>
                    <a href="https://www.facebook.com/" target='_blank'>
                    <img src="images/fb.png" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.twitter.com/" target='_blank'>
                    <img src="images/twitter.png" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/" target='_blank'>
                    <img src="images/linkedin.png" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/" target='_blank'>
                    <img src="images/instagram.png" alt="" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    </>
  )
}
