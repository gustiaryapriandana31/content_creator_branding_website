import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../fragments/Card";
import Button from "../elements/Button";
import { FaLocationArrow } from "react-icons/fa";

const ContentCreatorDatas = [
  {
    Id: 1,
    Name: "Travel to Bali",
    Desc: "Bali is a beautiful place to vis necessitatibusexcepturi perspiciatis consequuntur a architecto?",
    Img: "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rotate: "-rotate-6 translate-y-6 md:translate-x-2",
  },
  {
    Id: 2,
    Name: "Travel to Raja Ampat",
    Desc: "Raja Ampat is a beautiftium cumque excepturi perspiciatis consequuntur a architecto?",
    Img: "https://media.istockphoto.com/id/1996253989/photo/aerial-view-of-car-parked-with-camper-and-young-man-overlooking-the-great-australian-bight.webp?a=1&b=1&s=612x612&w=0&k=20&c=u9wQGPQjYyf3vm17V5wRSMmJTJXe8ZSdEOkCX76hgP8=",
    rotate: "rotate-3 translate-y-5 md:translate-x-2",
  },
  {
    Id: 3,
    Name: "Travel to Toba Lake",
    Desc: "Toba Lake is a beautiful place to visit vis nue excepturi perspiciatis consequuntur a architecto?",
    Img: "https://images.unsplash.com/photo-1592388748465-8c4dca8dd703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbGxpbmd8ZW58MHx8MHx8fDA%3D",
    rotate: "md:-rotate-3 rotate-6 translate-y-5 md:-translate-x-2",
  },
  {
    Id: 4,
    Name: "Travel to Toba Lake",
    Desc: "Toba Lake is a beautiful place to visit vis nue excepturi perspiciatis consequuntur a architecto?",
    Img: "https://plus.unsplash.com/premium_photo-1683408267588-ebc95a4cf9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    rotate:
      "md:rotate-6 -rotate-3 translate-y-6 md:-translate-x-2",
  },
];

const ContentCreatorTravels = () => {
  return (
    <section className="md:pt-5 p-4 bg-gray-950">
      <div className="md:p-12 p-3">
        <h2 className="my-5 md:mb-6 mb-3 text-center md:text-5xl text-3xl font-audiowide font-bold text-green-600">
          Shandy's Travels
        </h2>
        <div className="md:p-3 md:mb-0 mb-7 grid grid-cols-2 md:grid-cols-4 md:gap-7">
          {ContentCreatorDatas.map((data) => (
            <Card key={data.Id} rotate={data.rotate}>
              <Card.CardHeader Img={data.Img} donutName={data.Name} />
              <Card.CardBody Name={data.Name} Desc={data.Desc} />
              <Card.CardFooter
                Id={data.Id}
                Name={data.Name}
                Desc={data.Desc}
                Img={data.Img}
              />
            </Card>
          ))}
        </div>

        <Link to={"/travels"}>
          <Button addedClassname="mt-10 bg-green-500 rounded-full text-center mx-auto block p-2">
            <FaLocationArrow className="inline-block text-lg -mt-1"/> See More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ContentCreatorTravels;
