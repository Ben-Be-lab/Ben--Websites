import Girl from "../Components/Girl";
import Last from "../Components/Last";
import Lists from "../Components/Lists";
import OurservicesCard from "../Components/OurservicesCard";
import Service1 from "../assets/Service1.jpg"
import Service2 from "../assets/Service2.jpg"
import Service3 from "../assets/Service3.jpg"
import Service4 from "../assets/Service4.jpg"
import Service5 from "../assets/Service5.jpg"
import Service6 from "../assets/Service6.jpg"
import Home from "./Home";



const Services = () => {
  return (
    <>
      <Home />

      {/* Title */}
      <div className="mt-10 mb-6">
        <h1 className="font-bold text-center text-3xl">Our Services</h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-10">

        <OurservicesCard
          tittle="General House Cleaning"
          description="Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning"
          bgImage={Service1}
        />

        <OurservicesCard
          tittle="Deep Cleaning"
          description="Comprehensive cleaning in hard-to-reach areas including under furniture, corners, and walls"
          bgImage={Service2}
        />

        <OurservicesCard
          tittle="Move-In/Move-Out Cleaning"
          description="Thorough cleaning for moving into or out of a home, ensuring all spaces shine"
          bgImage={Service3}
        />

        <OurservicesCard
          tittle="Office Cleaning"
          description="Professional office cleaning including desks, floors, and shared work areas"
          bgImage={Service4}
        />

        <OurservicesCard
          tittle="Laundry and Folding"
          description="Washing, drying, folding, and organizing clothing and linens"
          bgImage={Service5}
        />

        <OurservicesCard
          tittle="After-Event Cleaning"
          description="Post-event cleanup to restore your space to perfect condition"
          bgImage={Service6}
        />

      </div>

      {/* Optional extra section */}
      <div className="bg-blue-200 mt-10">
        <Girl />
      </div>
      <div className="mt-10">
        <Lists/>
      </div>
      <div>
        <Last/>
      </div>
     
    </>
  );
};

export default Services;
