import "./App.css";
import Card from "./Card";
import dog from "./assets/dog.jpeg";

function App() {
  return (
    <>
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
      <button className="btn btn-primary">Click Me</button>
      <img
        width="400"
        src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRPMKnq00NF_T7RusUNeLrSazRZM0S5O8_AOcw2iBTmYTxd3Q7uXf0sW41odpAKqSblKDMUMHGb8nZRo9g"
      />
      <img width="400" src={dog} />
    </>
  );
}

export default App;
