import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className=" w-full bg-black fixed">
      <div className=" h-10 p-2 text-fuchsia-50 flex justify-center gap-10 items-center cursor-pointer">
        <Link className=" hover:border-b-2" to="about" smooth duration={500}>
          About
        </Link>
        <Link className=" hover:border-b-2" to="skills" smooth duration={500}>
          Skills
        </Link>
        <Link className=" hover:border-b-2" to="project" smooth duration={500}>
          Project
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
