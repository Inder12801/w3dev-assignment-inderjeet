import { PiFishSimpleBold } from "react-icons/pi";

const Logo = () => {
  return (
    <div className="text-5xl mt-2 text-pinkish uppercase">
      <span className=" font-extrabold ">Fish</span>
      <PiFishSimpleBold className="mx-2 animate-wobble hover:animate-wiggle cursor-pointer" />
      <span className=" font-extrabold ">List</span>
    </div>
  );
};

export default Logo;
