import { ReadMore } from "./buttons";

export const ServicesCard = (props) => {
  const { image, bankName, branch, streetNum } = props;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={bankName} />
      <div className="card-body">
        <h5 className="card-title">{branch}</h5>
        <p className="card-text">
          {streetNum} Some quick example text to build on the card title and
          make up the bulk of the card's content.
        </p>
        <ReadMore />
      </div>
    </div>
  );
};

export const AboutUsCard = (props) => {
  const { image, name, job, description } = props;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{job}</p>
        <p className="card-text">{description}</p>
        <ReadMore />
      </div>
    </div>
  );
};
