import React from "react";
import "./AboutCard.css";

function AboutCard() {
  return (
    <div className="about-card">
      <h3>About S3D-Gateway</h3>
      <p>
        S3D-Gateway allows you to manage and monitor your 3D prints with ease.
        Users must already have a sliced .stl file to upload to any available
        printer. Upon Printer Check, you will receive a notification that your
        print has started with a link to see the progress in real-time.
      </p>
      <h4>Contact Information:</h4>
      <p>
        Email: <a href="mailto:sam.d3v.35@gmail.com">sam.d3v.35@gmail.com</a>
      </p>
      <h4>Connect with Us</h4>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/samdev35"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/@icepikcrxsi?si=hOI26duj_p0rTXv3"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            href="https://github.com/FarmerSamuel-FS"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AboutCard;
