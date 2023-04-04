import "../styles/button.css";

const ButtonIcon = ({ startIcon, onClick, ...props }) => {
  // startIcon => undefined
  return (
    <button className="btn-icon" onClick={onClick}>
      <div className="align-content-btn">
        <div className="text-btn">{props.children}</div>
      </div>
    </button>
  );
};

export default ButtonIcon;
