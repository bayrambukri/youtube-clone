import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { IoMdVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const handleSubmit = (e) => {
    const navigate = useNavigate();
    e.preventDefault();

    const text = e.target[0].value;

    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="flex justify-between items-center p-5">
      <Link to={"/"} className="flex items-center gap-5">
        <img className="w-[75px]" src="ytbbb.png" alt="" />
        <h1 className="text-3xl max-sm:hidden font-semibold">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex group border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          type="text"
          placeholder="aramak istediğiniz kelimeyi giriniz..."
          className="bg-black text-white outline-none px-6 py-3"
        />
        <button className="bg-zinc-800 px-4 text-2xl hover:bg-blue-300">
          <FaSearch />
        </button>
      </form>
      <div className="flex text-2xl cursor-pointer gap-5">
        <FaBell className="hover:text-blue-500 transition" />
        <IoMdVideocam className="hover:text-red-500 transition" />
        <MdVideoLibrary className="hover:text-green-400 transition" />
      </div>
    </header>
  );
};

export default Header;
