const FileInput = ({ onFileInput }) => {
  return (
    <>
      <label
        htmlFor="file"
        className="flex items-center justify-center w-full h-12 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-gray-400 focus:outline-none"
      >
        <span className="text-sm font-medium text-gray-600">
          Click to upload a file
        </span>
        <input
          type="file"
          id="file"
          className="hidden"
          onChange={(e) => onFileInput(e.target.files[0])}
        />
      </label>
    </>
  );
};
export default FileInput;
