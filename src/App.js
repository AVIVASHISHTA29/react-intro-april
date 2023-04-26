import "./App.css";
import Card from "./Card";
import NewChat from "./NewChat";
import dog from "./assets/dog.jpeg";

function App() {
  return (
    <>
      <NewChat name="Alex" time="7:00PM" text="Hi How are you?" />
      <NewChat name="Jane" time="9:00PM" text="I am Good" />
      <NewChat name="Alex" time="10.00PM" text="Great..." />
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
