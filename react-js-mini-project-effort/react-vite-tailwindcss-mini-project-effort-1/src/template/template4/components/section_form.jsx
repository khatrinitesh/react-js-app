import React from 'react';
import SectionTitle from './sectiontitle';

export default function SectionForm() {
  return (
    <div className="inside-container contact-section">
      <SectionTitle headTitle="FORM & TIME SCHEDULE" para="At solmen li esser necessi uniform grammatica, pronunciation"/>
      <div className="row">
  <div className="col-lg-6">
    <div className="appointment">
      <h2 className="appointment-title">Make An Appiontment</h2>
      <p className="appointment-desc">
        At solmen va esser necessi far uniform grammatica, pronunciation e plu
        sommun paroles.
      </p>
      <form action="#" className="appointment-form">
        <div className="row">
          <div className="col-lg-6 appointment-form-col-left">
            <input
              type="text"
              className="form-control appointment-form-input"
              placeholder="First name*"
              required=""
            />
          </div>
          <div className="col-lg-6 appointment-form-col-right">
            <input
              type="text"
              className="form-control appointment-form-input"
              placeholder="Last name*"
              required=""
            />
          </div>
          <div className="col-lg-6 appointment-form-col-left">
            <input
              type="date"
              className="form-control appointment-form-input data-input"
              required=""
            />
          </div>
          <div className="col-lg-6 box-select appointment-form-col-right">
            <select
              name="gender"
              className="form-control appointment-form-input"
            >
              <option value="choose-class">Choose Class</option>
              <option value="class-1">Class 1</option>
              <option value="class-2">Class 2</option>
              <option value="class-3">Class 3</option>
            </select>
          </div>
          <div className="col-lg-6 appointment-form-col-left">
            <input
              type="tel"
              className="form-control appointment-form-input"
              placeholder="Phone"
              required=""
              defaultValue=""
              size={10}
              maxLength={10}
            />
          </div>
          <div className="col-lg-6 appointment-form-col-right">
            <input
              type="email"
              className="form-control appointment-form-input"
              placeholder="Email"
              required=""
            />
          </div>
          <div className="col-12 appointment-form-col-left">
            <textarea
              className="form-control appointment-form-text"
              id="exampleFormControlTextarea1"
              rows={3}
              placeholder="Message (Optional)"
              defaultValue={""}
            />
          </div>
          <div className="col-12 appointment-form-col-right">
            <button type="submit" className="appointment-form-btn" value="">
              Book An Appointment
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div className="col-lg-6 open-time">
    <div className="weekdays">
      <h3 className="open-time-title">Weekdays</h3>
      <p className="open-time-clock">06.00 AM - 07.00 AM</p>
      <p className="open-time-course">
        kundalini meditation beginners for Yoga
      </p>
      <p className="open-time-clock">07.00 AM - 08.30 AM</p>
      <p className="open-time-course">
        Surya Namaskar &amp; Advanced Meditation
      </p>
    </div>
    <div className="weekends">
      <h3 className="open-time-title">Weekends</h3>
      <p className="open-time-clock">05.00 AM - 07.00 AM</p>
      <p className="open-time-course">Weekly Pratice with children Yoga</p>
      <p className="open-time-clock">08.00 AM - 10.00 AM</p>
      <p className="open-time-course">
        Advanced Meditation &amp; Healthy Recipes
      </p>
    </div>
  </div>
</div>

    </div>
  )
}
