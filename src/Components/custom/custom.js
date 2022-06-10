import "./custom.css";
import CustomImg1 from "../../images/custom1.jpg";
import CustomImg2 from "../../images/custom2.jpg";
import CustomImg3 from "../../images/custom3.jpg";

const Custom = () => {
  return (
    <>
      <div className="container custom">
        <div className="row">
          <div className="col-sm-4">
            <img src={CustomImg1} className="img-fluid" alt="" />
          </div>

          <div className="col-sm-4 mid">
            <img src={CustomImg2} className="img-fluid" alt="" />
          </div>

          <div className="col-sm-4">
            <img src={CustomImg3} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Custom;
