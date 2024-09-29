const Button = ({ addedClassname, children, disabled, onClick }) => {
  return (
    <button
      className={`md:px-6 md:py-2 hover:font-semibold text-white outline-none focus:outline-none focus:outline-green-400 ${addedClassname}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
