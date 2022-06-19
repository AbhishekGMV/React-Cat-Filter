import Header from "./Header.Component";
import CatsList from "./CatsList.Component";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [initState, setInitState] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCatsData = async () => {
    setLoading(true);
    let res = await axios.get("https://api.thecatapi.com/v1/breeds");
    setData(res.data);
    setInitState(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getCatsData();
  }, []);

  return (
    <div className="App">
      <Header data={data} loading={loading} />
      <CatsList data={data} setData={setData} initState={initState} loading={loading} />
    </div>
  );
}

export default App;
