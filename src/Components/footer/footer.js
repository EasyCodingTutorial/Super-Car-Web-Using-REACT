import FooterImg from "../../images/footer.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <div className="img">
            <img src={FooterImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Footer_Content">
          <h6>
            <span>Easy Coding</span> Always With You...
          </h6>
        </div>
      </div>
    </>
  );
};
export default Footer;
