import Button from "../elements/Button";

const Card = ({ children, rotate }) => {
  return (
    <div className={`${rotate} hover:rotate-0 hover:scale-105 transition-all duration-300 w-full bg-transparent rounded-xl shadow-md text-white hover:shadow-gray-700 md:p-3 p-2 flex flex-col group`}>
      {children}
    </div>
  );
};

const CardHeader = ({ Img, Name }) => {
  return (
    <div className="bg-plate border-b-2 border-lime-400 group ">
      <div className="my-2 p-1 ">
        <img
          src={Img}
          alt={Name}
          className="w-full h-24 md:h-48 object-cover rounded-xl opacity-60 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

const CardBody = ({ Name, Desc }) => {
  return (
    <div className="h-full mt-3">
      <h1 className="font-bold md:text-lg text-sm w-full text-center">
        {Name}
      </h1>
      <p className="hidden md:block text-sm text-center">{Desc}</p>
    </div>
  );
};

const CardFooter = ({
  Id,
  Name,
  Desc,
  Img,
}) => {
  return (
    <Button
      addedClassname="mt-4 bg-lime-500 rounded-xl"
    >
      See
    </Button>
  );
};

Card.CardHeader = CardHeader;
Card.CardBody = CardBody;
Card.CardFooter = CardFooter;

export default Card;
