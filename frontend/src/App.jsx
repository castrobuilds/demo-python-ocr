import axios from "axios";
import { useState } from "react";

const App = () => {
  const [responseData, setResponseData] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-data");
      console.log(response.data);
      setResponseData(response.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <button className="border p-2 rounded" onClick={fetchData}>
        Fetch Data
      </button>
      <span className="ml-2">{responseData}</span>
    </div>
  );
};
export default App;
