import "./NewChat.css";

function NewChat({ name, time, text }) {
  return (
    <div className="new-card">
      <img
        height="70"
        src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
      />
      <div style={{ width: "100%" }}>
        <div className="info">
          <strong>{name}</strong>
          <p>Today at {time}</p>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default NewChat;
