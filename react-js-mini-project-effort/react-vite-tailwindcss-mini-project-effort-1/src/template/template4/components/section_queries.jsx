import React from 'react';
import SectionTitle from './sectiontitle';

export default function SectionQueries() {
  return (
    <div class="inside-container join-us-section">
      <SectionTitle headTitle="For any Queries and Free Class" para="At solmen li esser necessi uniform grammatica, pronunciation"/>
      <div className="row">
        <div className="col-12">
            <a href="#" className="join-us-btn">
            Join us now
            </a>
            <p className="join-us-call">
            or Call :{" "}
            <a href="tel:+39.0874.484661" className="join-us-phone-nr">
                +39.0874.484661
            </a>
            </p>
        </div>
        </div>

    </div>
  )
}
