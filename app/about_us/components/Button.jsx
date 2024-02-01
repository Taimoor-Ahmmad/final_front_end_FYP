const Button = ({ title, style }) => {
  return (
    <button>
      <div
        className="bg-cover bg-center bg-Btn h-10 w-20 text-white rounded-full flex items-center justify-center p-2"
        style={style}
      >
        {title}
      </div>
    </button>
  );
};

export default Button;
