import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-container">
          <img src="/JOH_logo.svg" alt="JO Hambro Logo" />
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4><em>About Us</em></h4>
            <ul>
              <li><a href="#">Our people & leadership</a></li>
              <li><a href="#">Our commitment</a></li>
              <li><a href="#">Corporate Social Responsibility</a></li>
              <li><a href="#">Diversity, equity & inclusion</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4><em>Our Funds</em></h4>
            <ul>
              <li><a href="#">Our investment strategies</a></li>
              <li><a href="#">Our investment platforms</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4><em>Insights</em></h4>
            <ul>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Podcasts</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4><em>Resources</em></h4>
            <ul>
              <li><a href="#">Polices & statements</a></li>
              <li><a href="#">Investor resources</a></li>
              <li><a href="#">Reports & accounts</a></li>
              <li><a href="#">Glossary</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Legal</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Investor Rights</a>
          <a href="#">Company Policies</a>
          <a href="#">Modern Slavery Act</a>
          <a href="#">Keeping you safe</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-note">
          <p>
            This website is issued and approved in the UK by J O Hambro Capital Management Limited (“JOHCML”) which is authorised and regulated by the Financial Conduct Authority. Registered office: Level 3, 1 St James’s Market, London SW1Y 4AH. Issued in the European Union by Perpetual Investment Services Europe Limited (“PISEL”) which is authorised by the Central Bank of Ireland. Registered office: 24 Fitzwilliam Place, Dublin 2, Ireland D02 T296. References to “JOHCM” below are to either JOHCML or PISEL as the context requires. J O Hambro® and JOHCM® are registered trademarks of JOHCML. Telephone calls to and from JOHCML and PISEL may be recorded.              </p>
          <p>© 2024 J O Hambro Capital Management Limited. All rights reserved.</p>
        </div>
        {/* <div className="social-icons">
              <a href="#"><img src="/linkedin-icon.svg" alt="LinkedIn" /></a>
            </div> */}
      </div>
    </footer>
  );
}

export default Footer;
