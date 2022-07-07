// import React,{useState} from 'react';
// import './App.css';
// import axios from 'axios';
import Inc_dec from "./Inc_dec.js";
function App() {
  // const [data,setData] = useState(0)
  // const Handle = async () => {
  //   try {
  //     const val = (await axios.get("https://randomuser.me/api/")).data
  //       .results[0].name.first;
  //     console.log(val);
  //     setData(val);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    // <div className="App">
    //   Pandit Utkarsh
    //   <div>{data}</div>
    //   <button onClick={Handle}>Handle</button>
    // </div>
    <div>
           <Inc_dec />
    </div>
  );
}

export default App;
