import PopularImg1 from "../../images/popular1.jpg";
import PopularImg2 from "../../images/popular2.jpg";
import "./popular.css";

const Popular = () => {
  return (
    <>
      <div className="popular container">
        <div className="row">
          <div className="col-sm-6">
            <div className="box">
              <img src={PopularImg1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="offset-sm-1 col-sm-5">
            <div className="box">
              <h6>Easy Coding</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                accusantium, aliquid neque sit autem pariatur in dicta
                cupiditate error quod id ea officiis fuga similique est odit
                maiores eum et. <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore alias quia illum distinctio iusto reiciendis modi
                laborum quo provident quae laudantium, beatae dolores! Officia
                ut quo corrupti molestiae deserunt aspernatur? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                explicabo praesentium fuga! Quam expedita illum, cum quibusdam
                fugiat molestiae corporis laborum nesciunt ipsam neque eligendi
                aspernatur pariatur quis libero adipisci?
              </p>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-5">
            <div className="box">
              <h6>Easy Coding</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                accusantium, aliquid neque sit autem pariatur in dicta
                cupiditate error quod id ea officiis fuga similique est odit
                maiores eum et. <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore alias quia illum distinctio iusto reiciendis modi
                laborum quo provident quae laudantium, beatae dolores! Officia
                ut quo corrupti molestiae deserunt aspernatur? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                explicabo praesentium fuga! Quam expedita illum, cum quibusdam
                fugiat molestiae corporis laborum nesciunt ipsam neque eligendi
                aspernatur pariatur quis libero adipisci?
              </p>
              <button className="btn">Read More</button>
            </div>
          </div>

          <div className="offset-sm-1 col-sm-6">
            <div className="box">
              <img src={PopularImg2} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popular;
