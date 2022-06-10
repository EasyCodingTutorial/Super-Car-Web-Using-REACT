import PostImg from "../../images/post.jpg";
import "./post.css";
const Post = () => {
  return (
    <>
      <div className="post container">
        <div className="row">
          <div className="offset-sm-1 col-sm-5">
            <h6>What We've Feel When Travelling</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              laudantium alias. Sequi a aut suscipit autem! Iure molestias a
              facilis eius explicabo alias sunt, suscipit, itaque aliquid
              doloremque exercitationem nisi. <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, consequuntur deserunt. Debitis fugiat recusandae error
              aperiam neque laudantium, dolorem veniam commodi! Adipisci error
              provident tempore molestiae consectetur quis explicabo suscipit.
              <br></br>
            </p>
            <button className="btn">Read More</button>
          </div>

          <div className="offset-sm-1 col-sm-5">
            <img src={PostImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
