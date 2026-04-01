const ResultOutput = (resultData) => {
  return (
    <div className="mt-6 p-4 bg-gray-900 text-green-400 rounded-lg shadow-inner">
      <h3 className="text-xs uppercase font-bold mb-2 text-gray-500">
        JSON Output
      </h3>
      <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
        {JSON.stringify(resultData.data, null, 2)}
      </pre>
    </div>
  );
};
export default ResultOutput;
