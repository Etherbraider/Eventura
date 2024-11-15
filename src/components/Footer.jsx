import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id="footer-container">
      <div >
        <div id="foot-top" >
        <div className="foot-divs" id="footer-left">
          <h2 className="foot-heads">Quick Links</h2>
          <ul>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/help-center">Help Center</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="foot-divs" id="footer-mid">
          <div className="social-icons">
            <h2 className="foot-heads">Connect with Us</h2>
            <ul>
              <li>
                <a href="https://facebook.com/eventura" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com/eventura" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/eventura" target="_blank">
                  Linked In
                </a>
              </li>
              <li>
                <a href="https://twitter.com/eventura" target="_blank">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-divs" id="footer-end">
          <h2 className="foot-heads">Contact Information</h2>
          <p>
            Email:{" "}
            <a href="mailto:support@eventura.com">support@eventura.com</a>
          </p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Address: Eventura HQ, [Street Address, City, State, Zip Code]</p>
        </div>
        </div>
        
      </div>

      <div id="copyrights">
        <p>Copyright &copy;Eventura.com</p>
      </div>
    </div>
  );
};
export default Footer;
