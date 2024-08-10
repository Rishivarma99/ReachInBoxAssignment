import { SiGmail } from "react-icons/si";
import { TbHomeFilled } from "react-icons/tb";
import { BsFillInboxFill } from "react-icons/bs";

const Navbar1 = ({ handlePage, selectedTab }) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-[48px] bg-black min-h-screen h-full p-1">
        <div className="flex items-center flex-col">
          <div class="h-[64px] p-2">
            <SiGmail className="text-black text-3xl bg-white p-1" />
          </div>

          <div className="flex flex-col gap-7 text-2xl">
            <TbHomeFilled
              className="text-[#a1a1aa]"
              data-id="Home"
              onClick={(e) => handlePage(e)}
            ></TbHomeFilled>
            <TbHomeFilled className="text-[#a1a1aa]"></TbHomeFilled>
            <TbHomeFilled className="text-[#a1a1aa]"></TbHomeFilled>
            <TbHomeFilled className="text-[#a1a1aa]"></TbHomeFilled>
            <TbHomeFilled className="text-[#a1a1aa]"></TbHomeFilled>
            <BsFillInboxFill
              className="text-[#a1a1aa]  "
              data-id="Onebox"
              onClick={(e) => handlePage(e)}
            ></BsFillInboxFill>
            <TbHomeFilled className="text-[#a1a1aa]"></TbHomeFilled>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
