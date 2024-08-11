import { FaAngleDown } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-black p-2 w-full border-b-2 border-b-gray-600 px-6 ">
        <div>
          <p className="text-white text-xl font-semibold">Onebox</p>
        </div>
        {/* flex for button and workspace */}
        <div className="flex justify-center items-center gap-4">
          <div>
            <div className="flex items-center gap-3 z-100">
              <button
                type="button"
                role="switch"
                aria-checked="false"
                data-state="unchecked"
                value="on"
                className="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-foreground/50 h-[26px] w-[54px] data-[state=checked]:bg-[#DADEE1] data-[state=unchecked]:bg-[#222426]"
              >
                <span
                  data-state="unchecked"
                  className="pointer-events-none block rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 h-[20px] w-[20px] bg-[#888686] data-[state=checked]:bg-white data-[state=unchecked]:bg-grey m-[5px]"
                ></span>
              </button>
            </div>
          </div>
          {/* end of light dark button  */}
          <div>
            <div className="flex w-full ">
              <button
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-card hover:bg-accent hover:text-accent-foreground h-10 py-2 w-[250px] px-3 justify-start"
                role="combobox"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r1:"
                data-state="closed"
              >
                <div className="flex w-full justify-between items-center">
                  <p className="truncate pr-2 text-white">My Workspace</p>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    // stroke-width="2"
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    className="h-5 w-5 text-white text-2xl"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg> */}
                  <FaAngleDown className="h-5 w-5 text-white text-2xl"></FaAngleDown>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
