const Button = ({ addedClassname, children, disabled, onClick }) => {
  return (
    <button
      className={`px-6 py-2 hover:font-semibold text-white outline-none focus:outline-none focus:outline-green-400 ${addedClassname}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
