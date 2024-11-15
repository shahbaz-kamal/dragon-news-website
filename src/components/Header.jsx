import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  const date = new Date();
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="mb-4 md:mb-5 w-full px-2 md:px-0 md:w-[471px]">
        <img src={logo} alt="" />
      </div>
      <p className="mb-[10px] text-base md:text-lg text-color-70">
        Journalism Without Fear or Favour
      </p>
      <p className="text-lg md:text-xl font-medium text-color-70">
        {moment().format("dddd MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
