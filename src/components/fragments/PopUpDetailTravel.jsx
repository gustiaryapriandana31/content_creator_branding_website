import Button from "../elements/Button";

const PopUpDetailTravel = ({
  popUpDetailTravel,
  setPopUpDetailTravel,
  TravelDetail,
  setTravelDetail,
}) => {
  const handleCloseDetailTravel = () => {
    setPopUpDetailTravel(!popUpDetailTravel);
    setTravelDetail([]);
  };

  return (
    <div>
      {TravelDetail && (
        <div className="md:w-1/2 md:p-8 p-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full right-0 bg-white/90 shadow-lg rounded-xl">
          <img
            src={TravelDetail.TravelImg}
            alt={TravelDetail.TravelName}
            className="w-full h-24 md:h-80 object-cover"
          />
          <h1 className="text-3xl font-bold text-center">
            {TravelDetail.TravelName}
          </h1>
          <h1>{TravelDetail.TravelDesc}</h1>
          <Button
            addedClassname="mt-4 bg-green-600 rounded-xl"
            onClick={handleCloseDetailTravel}
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

export default PopUpDetailTravel;
