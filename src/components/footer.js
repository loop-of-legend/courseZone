
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {   faFacebook,   faTwitter,   faLinkedin,   faGooglePlus,   faInstagram,
} from "@fortawesome/free-brands-svg-icons"; library.add(faFacebook, faTwitter, faLinkedin, faGooglePlus, faInstagram); function Footer() {   return (     <>       <footer class="footer">         <div class="footer-left col-md-4 col-sm-6">           <p class="about">             <span> About the company</span> Ut congue augue non tellus bibendum,             in varius tellus condimentum. In scelerisque nibh tortor, sed             rhoncus odio condimentum in. Sed sed est ut sapien ultrices             eleifend. Integer tellus est, vehicula eu lectus tincidunt,             ultricies feugiat leo. Suspendisse tellus elit, pharetra in             hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante             sed, viverra massa.           </p>           <div class="icons">             <a href="#">               <FontAwesomeIcon icon={faFacebook} />             </a>             <a href="#">               <FontAwesomeIcon icon={faTwitter} />             </a>             <a href="#">               <FontAwesomeIcon icon={faLinkedin} />             </a>             <a href="#">               <FontAwesomeIcon icon={faGooglePlus} />             </a>             <a href="#">               <FontAwesomeIcon icon={faInstagram} />             </a>           </div>         </div>         <div class="footer-center col-md-4 col-sm-6">           <div>             <p>               <span> Street name and number</span> City, Country             </p>           </div>           <div>             <p> (+962) 7989 30 818</p>           </div>           <div>             <p>               <a href="#"> office@company.com</a>             </p>           </div>         </div>         <div class="footer-right col-md-4 col-sm-6">           <h2>             {" "}             Company<span> logo</span>           </h2>           <p class="menu">             <a href="#"> Home</a> |<a href="#"> About</a> |             <a href="#"> Services</a> |<a href="#"> Portfolio</a> |             <a href="#"> News</a> |<a href="#"> Contact</a>           </p>           <p class="name"> CourseZone &copy; 2023</p>         </div>       </footer>     </>   );} export default Footer;

 

 

 

 

 