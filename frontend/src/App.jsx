import axios from "axios";
import { useState } from "react";
import FileInput from "./components/file-input";
import ResultOutput from "./components/result-output";
import ImageDisplay from "./components/image-display";

const App = () => {
  // States
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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Extract Text from Images
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Extract text from scanned documents, photos, or any image containing
            text.
          </p>
        </header>
        <main className="text-center">
          <div>
            <FileInput onFileInput={fetchData} />
            <ImageDisplay original={2} processed={2} />
          </div>
          {responseData && <ResultOutput data={responseData} />}
        </main>
      </div>
    </div>
  );
};
export default App;
