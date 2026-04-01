const ImageDisplay = ({ original, processed }) => {
  if (!original && !processed) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-500 uppercase">
          Original Upload
        </p>
        <img
          src={original}
          alt="Original"
          className="rounded-xl border shadow-sm w-full h-64 object-cover"
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-indigo-600 uppercase">
          OpenCV Result
        </p>
        {processed ? (
          <img
            src={processed}
            alt="Processed"
            className="rounded-xl border-2 border-indigo-400 shadow-md w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 italic">
            Awaiting AI analysis...
          </div>
        )}
      </div>
    </div>
  );
};
export default ImageDisplay;
