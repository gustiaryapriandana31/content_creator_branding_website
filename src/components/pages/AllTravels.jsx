import { useEffect, useState } from "react";
import Card from "../fragments/Card";
import Button from "../elements/Button";
import PopUpDetailTravel from "../fragments/PopUpDetailTravel";
import Header from "../layouts/Header";
import PageTransition from "./PageTransition";
import StairTransition from "./StairTransition";

const ContentCreatorDatas = [
  {
    TravelId: 1,
    TravelName: "Travel to Bali",
    TravelDesc: "Bali is a beautiful place to vis necessitatibusexcepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    TravelId: 2,
    TravelName: "Travel to Raja Ampat",
    TravelDesc: "Raja Ampat is a beautiftium cumque excepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://media.istockphoto.com/id/1996253989/photo/aerial-view-of-car-parked-with-camper-and-young-man-overlooking-the-great-australian-bight.webp?a=1&b=1&s=612x612&w=0&k=20&c=u9wQGPQjYyf3vm17V5wRSMmJTJXe8ZSdEOkCX76hgP8=",
    rotate: "rotate-3 translate-y-5 translate-x-2",
  },
  {
    TravelId: 3,
    TravelName: "Travel to Toba Lake",
    TravelDesc: "Toba Lake is a beautiful place to visit vis nue excepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://images.unsplash.com/photo-1592388748465-8c4dca8dd703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbGxpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    TravelId: 4,
    TravelName: "Travel to Toba Lake",
    TravelDesc: "Toba Lake is a beautiful place to visit vis nue excepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://plus.unsplash.com/premium_photo-1683408267588-ebc95a4cf9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    TravelId: 5,
    TravelName: "Travel to Bali",
    TravelDesc: "Bali is a beautiful place to vis necessitatibusexcepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    TravelId: 6,
    TravelName: "Travel to Raja Ampat",
    TravelDesc: "Raja Ampat is a beautiftium cumque excepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://media.istockphoto.com/id/1996253989/photo/aerial-view-of-car-parked-with-camper-and-young-man-overlooking-the-great-australian-bight.webp?a=1&b=1&s=612x612&w=0&k=20&c=u9wQGPQjYyf3vm17V5wRSMmJTJXe8ZSdEOkCX76hgP8=",
  },
  {
    TravelId: 7,
    TravelName: "Travel to Toba Lake",
    TravelDesc: "Toba Lake is a beautiful place to visit vis nue excepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://images.unsplash.com/photo-1592388748465-8c4dca8dd703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbGxpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    TravelId: 8,
    TravelName: "Travel to Toba Lake",
    TravelDesc: "Toba Lake is a beautiful place to visit vis nue excepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://plus.unsplash.com/premium_photo-1683408267588-ebc95a4cf9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    TravelId: 9,
    TravelName: "Travel to Bali",
    TravelDesc: "Bali is a beautiful place to vis necessitatibusexcepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    TravelId: 10,
    TravelName: "Travel to Raja Ampat",
    TravelDesc: "Raja Ampat is a beautiftium cumque excepturi perspiciatis consequuntur a architecto?",
    TravelImg: "https://media.istockphoto.com/id/1996253989/photo/aerial-view-of-car-parked-with-camper-and-young-man-overlooking-the-great-australian-bight.webp?a=1&b=1&s=612x612&w=0&k=20&c=u9wQGPQjYyf3vm17V5wRSMmJTJXe8ZSdEOkCX76hgP8=",
  },
];

const ContentCreatorTravels = () => {
   const [TravelDetail, setTravelDetail] = useState([]);
   const [popUpDetailTravel, setPopUpDetailTravel] = useState(false);

   const handleShowDetailTravel = (TravelId) => {
     try {
       setPopUpDetailTravel(true);
       const TravelDetailDataRef = ContentCreatorDatas.find(
         (travelData) => travelData.TravelId === TravelId
       );

       if (TravelDetailDataRef) {
         setTravelDetail(TravelDetailDataRef);
       } else {
         console.log("No detail travel data found", TravelId);
       }
     } catch (error) {
       console.error("Error occured while fetching detail travel data:", error);
     }
   };
  return (
    <>
      <Header/>
      <StairTransition/>
      <PageTransition>
        <section className="md:pt-5 p-4 bg-gray-950 min-h-screen">
          <div className="md:p-12 p-3">
            <h2 className="mt-7 md:mb-6 mb-3 text-center md:text-6xl text-3xl font-bold text-green-600">
              Shandy's Travels
            </h2>
            <div className={`${popUpDetailTravel ? "opacity-20" : "opacity-100"} transition-all duration-100 md:p-3 md:mb-0 mb-7 grid grid-cols-2 md:grid-cols-4 md:gap-7`}>
              {ContentCreatorDatas.map((data) => (
                <Card key={data.TravelId}>
                  <Card.CardHeader
                    TravelImg={data.TravelImg}
                    TravelName={data.TravelName}
                  />
                  <Card.CardBody
                    TravelName={data.TravelName}
                    TravelDesc={data.TravelDesc}
                  />
                  <Card.CardFooterAllTravels
                    TravelId={data.TravelId}
                    handleShowDetailTravel={handleShowDetailTravel}
                  />
                </Card>
              ))}
            </div>
          </div>

          {popUpDetailTravel && 
            <PopUpDetailTravel popUpDetailTravel={popUpDetailTravel} setPopUpDetailTravel={setPopUpDetailTravel} TravelDetail={TravelDetail} setTravelDetail={setTravelDetail}/>
          }
        </section>
      </PageTransition>
    </>
  );
};

export default ContentCreatorTravels;
