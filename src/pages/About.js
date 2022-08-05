import aboutUsData from "../data.json";
import { AboutUsCard } from "../components/cards";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        {aboutUsData.personData.map((person) => {
          return (
            <div className="col-4" key={person.id}>
              <AboutUsCard {...person} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
