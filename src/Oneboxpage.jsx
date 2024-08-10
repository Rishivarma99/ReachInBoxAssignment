import { useState } from "react";
import Navbar1 from "./components/Navbar1";
import Topbar from "./components/Topbar";
import Home1 from "./components/Home1";
import Onebox1 from "./components/Onebox1";

const Oneboxpage = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handlePage = (event) => {
    let data = event.currentTarget.dataset.id;

    if (data == "Home") {
      if (selectedTab != "Home") {
        setSelectedTab("Home");
      }
    } else if (data == "Onebox") {
      if (selectedTab != "Onebox") {
        setSelectedTab("Onebox");
      }
    }
  };
  return (
    <>
      <div className="flex">
        {/* side bar */}
        <Navbar1 handlePage={handlePage} selectedTab={selectedTab}></Navbar1>

        {/* content */}
        <div className="flex flex-col w-full">
          <Topbar></Topbar>
          {selectedTab == "Home" && <Home1></Home1>}
          {selectedTab == "Onebox" && <Onebox1></Onebox1>}
        </div>
      </div>
    </>
  );
};

export default Oneboxpage;
