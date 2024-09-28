import Button from "../elements/Button";

const Card = ({ children, TravelRotate }) => {
  return (
    <div className={`${TravelRotate} hover:rotate-0 hover:scale-105 transition-all duration-300 w-full bg-transparent rounded-xl shadow-md text-white hover:shadow-gray-700 md:p-3 p-2 flex flex-col group`}>
      {children}
    </div>
  );
};

const CardHeader = ({ TravelImg, TravelName }) => {
  return (
    <div className="bg-plate border-b-2 border-lime-400 group ">
      <div className="my-2 p-1 ">
        <img
          src={TravelImg}
          alt={TravelName}
          className="w-full h-24 md:h-48 object-cover rounded-xl opacity-60 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

const CardBody = ({ TravelName, TravelDesc }) => {
  return (
    <div className="h-full mt-3">
      <h1 className="font-bold md:text-lg text-sm w-full text-center">
        {TravelName}
      </h1>
      <p className="hidden md:block text-sm text-center">{TravelDesc}</p>
    </div>
  );
};

const CardFooter = ({ TravelId, handleShowDetailTravel }) => {
  return (
    <Button
      addedClassname="mt-4 bg-green-600 rounded-xl"
      onClick={() => handleShowDetailTravel(TravelId)}
    >
      See
    </Button>
  );
};

Card.CardHeader = CardHeader;
Card.CardBody = CardBody;
Card.CardFooter = CardFooter;

export default Card;
