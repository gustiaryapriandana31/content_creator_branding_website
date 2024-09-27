const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="appearance-none text-white bg-gray-900 text-sm w-full py-3 px-3 placeholder:opacity-80 outline-none focus:border-b-2 focus:border-green-500"
      onChange={onChange}
    />
  );
};

export default Input;
