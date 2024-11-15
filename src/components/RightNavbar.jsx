import { FaGithub, FaGoogle } from "react-icons/fa";
import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";

const RightNavbar = () => {
  return (
    <div>
      <section>
        <SocialLogin></SocialLogin>
      </section>
      <section className="mt-5 md:mt-7">
        <FindUs></FindUs>
      </section>
    </div>
  );
};

export default RightNavbar;
