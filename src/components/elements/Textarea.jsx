const TextArea = ({ name, rows, placeholder, children, onChange }) => {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      onChange={onChange}
      className="appearance-none text-white bg-gray-900 text-sm w-full py-3 px-3 placeholder:opacity-80 outline-none focus:border-b-2 focus:border-green-500 shadow-sm shadow-gray-700 rounded-lg">
        
      {children}
    </textarea>
  );
};

export default TextArea;
