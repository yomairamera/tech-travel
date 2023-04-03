import "../styles/button.css";

const Button = ({ startIcon, onClick, ...props }) => {
  // startIcon => undefined
  return (
    <button className="btn" onClick={onClick}>
      <div className="align-content-btn text-color-white">
        {startIcon && (
          <img
            className="img-btn"
            src={process.env.PUBLIC_URL + startIcon}
            alt="imagen"
          />
        )}
        <div className="text-btn">{props.children}</div>
      </div>
    </button>
  );
};

export default Button;
