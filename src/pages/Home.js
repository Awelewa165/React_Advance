import data from "../data.json";
import { ServicesCard } from "../components/cards";
import Hero from "../components/hero";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesCardList />
    </>
  );
};

const ServicesCardList = () => {
  return (
    <div className="container">
      <div className="row">
        {data.bankData.map((bank) => {
          return (
            <div className="col-4" key={bank.id}>
              <ServicesCard {...bank}></ServicesCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
