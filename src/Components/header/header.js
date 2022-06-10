import HeaderImg from "../../images/header.jpg";
import "./header.css";
const Header = () => {
  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="img">
          <div>
            <img src={HeaderImg} className="img-fluid" alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Content">
          <h6>Supercars And RoadTrips</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam
            <br />
            laboriosam commodi facere, quas autem inventore maiores consectetur
            voluptas blanditiis?
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  );
};
export default Header;
