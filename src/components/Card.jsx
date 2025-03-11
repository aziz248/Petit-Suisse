import PropTypes from "prop-types";

function Card(props) {
  const {
    name = Card.defaultProps.name,
    des = Card.defaultProps.des,
    img_link = Card.defaultProps.img_link,
    IsAvailable = Card.defaultProps.IsAvailable,
  } = props;

  const btn = IsAvailable ? (
    <button type="button" className="btn">
      Contact
    </button>
  ) : null;

  return (
    <div className="card">
      <img className="card-img" src={img_link} alt="profile picture" />
      <h2 className="card-title">{name}</h2>
      <p className="card-des">{des}</p>
      <p>Available : {IsAvailable ? "yes" : "no"}</p>
      {btn}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  des: PropTypes.string,
  img_link: PropTypes.string,
  IsAvailable: PropTypes.bool,
};

Card.defaultProps = {
  name: "guest",
  des: "new",
  img_link: " /students.jpg",
  IsAvailable: false,
};

export default Card;
