import "./App.css";
import Card from "./Card";
import NewChat from "./NewChat";
import dog from "./assets/dog.jpeg";
import messages from "./messagesData";

function App() {
  return (
    <>
      {messages.map((item) => {
        return (
          <NewChat name={item.sender} time={item.time} text={item.message} />
        );
      })}
      {/* {messages.map((item) => (
        <NewChat name={item.sender} time={item.time} text={item.message} />
      ))} */}

      {/* {messages.map((item) => {})} you need to write return  */}
      {/* {messages.map((item) => ())} no need to write return  */}

      {/* <Card
        name={"Shri Ram"}
        desc={"Shri Ram is a student at Acciojob in 2023 in F3"}
      />
      <Card
        name={"Avi Vashishta"}
        desc={"Avi is a student at Acciojob in 2023 in F3"}
      />
      <Card
        name={"Rodriguez"}
        desc={"Rodriguez is a student at Acciojob in 2023 in F3"}
      /> */}
      {/* <button class="ui button">Click Me</button> */}
      {/* <img
        width="400"
        src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRPMKnq00NF_T7RusUNeLrSazRZM0S5O8_AOcw2iBTmYTxd3Q7uXf0sW41odpAKqSblKDMUMHGb8nZRo9g"
      />
      <img width="400" src={dog} /> */}
    </>
  );
}

export default App;
