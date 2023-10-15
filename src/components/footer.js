import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGooglePlus,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebook,
  faTwitter,
  faLinkedin,
  faGooglePlus,
  faInstagram,
  faMapMarker,
  faPhone,
  faEnvelope
);

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <p class="about">
            <span> About Course Zone</span> is a cutting-edge online learning
            platform that strives to revolutionize education in the digital age.
            Just like Udemy, our platform is dedicated to empowering individuals
            and organizations with knowledge. We offer a vast and diverse
            library of courses, each created and curated by industry experts and
            professionals who are passionate about sharing their expertise.
          </p>
          <div class="icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <p>
              <span> King Abdallah Street</span> Irbid, Jordan
            </p>
          </div>
          <div>
            <FontAwesomeIcon style={{ color: "white" }} icon={faPhone} />
            <p style={{ margin: "0 0 0 5px" }}> (+962) 7989 30 818</p>
          </div>
          <div>
            <FontAwesomeIcon style={{ color: "white" }} icon={faEnvelope} />
            <p>
              <a href="#" style={{ margin: "0 0 0 5px" }}>
                {" "}
                ziad@CourseZone.com
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right col-md-4 col-sm-6">
          <h2>
            {" "}
            <span>Course</span>Zone
          </h2>
          <p class="menu">
            <a href="#"> Home</a> |<a href="#"> About</a> |
            <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
            <a href="#"> News</a> |<a href="#"> Contact</a>
          </p>
          <p class="name"> CourseZone &copy; 2023</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
