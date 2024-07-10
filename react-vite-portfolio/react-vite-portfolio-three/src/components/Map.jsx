import React from "react";

const MapComp = () => {
  return (
    <>
      <div id="contact" className="map-area mt100">
        <iframe
          className="contact-map-size"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1613802584124!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="map-content">
          <div className="content-body">
            <form
              id="contact-form"
              action="https://whizthemes.com/mail-php/other/mail.php"
            >
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Name"
                  className="info"
                  name="con_name"
                />
                <input
                  type="email"
                  placeholder="E-mail*"
                  className="info"
                  name="con_email"
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="info"
                  name="con_subject"
                />
                <textarea
                  className="area-text"
                  placeholder="Message"
                  name="con_message"
                  defaultValue={""}
                />
              </div>
              <p className="form-message" />
              <div className="input-box upload-box">
                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapComp;
