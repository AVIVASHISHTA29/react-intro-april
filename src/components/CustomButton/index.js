import "./styles.css";

function CustomButton({ text, onClickFnc, myClass }) {
  return (
    <button onClick={onClickFnc} className={myClass}>
      {text}
    </button>
  );
}

export default CustomButton;
