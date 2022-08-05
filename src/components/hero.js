import heroImg from "../images/desktop_tools.png";

import NavBar from "./navBar";

const Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-5">
          <h1 className="heading">Learning Experience Redefined</h1>
        </div>
        <div className="col-7">
          <img src={heroImg} alt="" className="h-50 w-50 m-auto p-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
