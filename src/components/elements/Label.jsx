const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className= "block text-slate-700 font-bold md:text-lg md:mb-2 mb-3">
      {children}
    </label>

  );
};

export default Label;
