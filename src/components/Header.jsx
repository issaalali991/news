import { UilSearch } from "@iconscout/react-unicons";
import Logo from "../assets/Logo.png";

const Header = ({ submitForm }) => {
  return (
    <div>
      <div className=" w-full h-[120px] lg:h-[150px] flex justify-center">
        {/* Header Container für Logo / Name */}
        <img src={Logo} alt="Logo" className="w-[300px] h-[120px]" />
      </div>
      <form
        className="flex flex-row items-center"
        onSubmit={(e) => submitForm(e)}
      >
        {/* Container für Suche */}
        <input
          id="search"
          type="text"
          className="h-14 w-3/4 md:w-96 pr-8 pl-5 rounded z-0 outline-1 outline outline-gray-300 focus:shadow focus:outline-none rounded-full"
          placeholder="Search anything..."
        />
        <button>
          <UilSearch size="35" className="ml-3" />
        </button>
      </form>
    </div>
  );
};

export default Header;
