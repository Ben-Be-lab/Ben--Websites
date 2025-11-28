
const ServicesCard = ({ title, description, bgImage }) => {
  return (
    <div className="border p-4">
      {/* Title and description */}
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>

      {/* Background image */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-cover h-64 w-full my-4"
      ></div>

      {/* Additional text */}
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>

      {/* Section title */}
      <div className="text-center font-bold text-3xl mb-2">
        <h2>Our service</h2>
      </div>

      {/* Service description */}
      <div>
        <h6 className="font-bold">General House Cleaning</h6>
        <p>
          Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning
        </p>
      </div>

      <div>
        <h6 className="font-bold">General House Cleaning</h6>
        <p>
          Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning
        </p>
      </div>


    </div>
  );
};
export default ServicesCard;
