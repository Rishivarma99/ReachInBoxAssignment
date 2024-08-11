import { SiGmail } from "react-icons/si";
import { TbHomeFilled } from "react-icons/tb";
import { BsFillInboxFill } from "react-icons/bs";

const Navbar1 = ({ handlePage, selectedTab }) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-[48px] bg-black min-h-screen h-full p-1 border-r-2 border-r-gray-600">
        <div className="flex items-center flex-col h-full">
          <div className="h-[65px] p-2 ">
            <SiGmail className="text-black text-3xl bg-white p-1" />
          </div>

          <div className="pt-10 flex flex-col justify-between items-center h-full gap-y-[130px]">
            <div className="flex flex-col  text-3xl gap-y-8 ">
              <TbHomeFilled
                className="text-[#a1a1aa]"
                data-id="Home"
                onClick={(e) => handlePage(e)}
              ></TbHomeFilled>
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
                  fill="#AEAEAE"
                />
                <path
                  d="M12.35 16.01C9.62 15.91 4 17.27 4 20V22H13.54C11.07 19.24 12.31 16.11 12.35 16.01Z"
                  fill="#AEAEAE"
                />
                <path
                  d="M21.43 20.02C21.79 19.43 22 18.74 22 18C22 15.79 20.21 14 18 14C15.79 14 14 15.79 14 18C14 20.21 15.79 22 18 22C18.74 22 19.43 21.78 20.02 21.43L22.59 24L24 22.59L21.43 20.02ZM18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18C20 19.1 19.1 20 18 20Z"
                  fill="#AEAEAE"
                />
              </svg>
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2 7.5H6.8C5.81 7.5 5.009 8.31 5.009 9.3L5 20.1C5 21.09 5.81 21.9 6.8 21.9H21.2C22.19 21.9 23 21.09 23 20.1V9.3C23 8.31 22.19 7.5 21.2 7.5ZM21.2 11.1L14 15.6L6.8 11.1V9.3L14 13.8L21.2 9.3V11.1Z"
                  fill="#AEAEAE"
                />
              </svg>
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7381 23.5C16.0667 23.5 16.3472 23.3754 16.5795 23.1261C16.8118 22.8824 17.0072 22.5567 17.1659 22.1487L22.7664 7.48867C22.8401 7.29603 22.8967 7.11756 22.9364 6.95326C22.9761 6.78895 22.9959 6.63314 22.9959 6.48584C22.9959 6.18555 22.9081 5.94759 22.7324 5.77195C22.5568 5.59065 22.3188 5.5 22.0186 5.5C21.8769 5.5 21.7211 5.52266 21.5511 5.56799C21.3812 5.60765 21.1999 5.66147 21.0072 5.72946L6.29618 11.364C5.92791 11.5057 5.61913 11.6926 5.36983 11.9249C5.12621 12.1572 5.00439 12.4377 5.00439 12.7663C5.00439 13.1686 5.14037 13.466 5.41233 13.6586C5.68428 13.8456 6.02706 14.0014 6.44065 14.1261L10.8514 15.4773C11.146 15.568 11.3925 15.6048 11.5908 15.5878C11.7891 15.5652 11.9931 15.4575 12.2027 15.2649L21.6616 6.49433C21.7183 6.44334 21.7778 6.41785 21.8401 6.41785C21.9081 6.41785 21.9676 6.44051 22.0186 6.48584C22.0639 6.53116 22.0865 6.58782 22.0865 6.65581C22.0865 6.71813 22.0582 6.77762 22.0016 6.83428L13.265 16.3187C13.0837 16.5113 12.9789 16.7096 12.9506 16.9136C12.9279 17.1176 12.9591 17.3697 13.0441 17.67L14.3528 21.9873C14.4831 22.4235 14.6446 22.7833 14.8373 23.0666C15.0299 23.3555 15.3302 23.5 15.7381 23.5Z"
                  fill="#AEAEAE"
                />
              </svg>
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 17H9V13H5V17ZM5 22H9V18H5V22ZM5 12H9V8H5V12ZM10 17H23V13H10V17ZM10 22H23V18H10V22ZM10 8V12H23V8H10Z"
                  fill="#AEAEAE"
                />
              </svg>

              <BsFillInboxFill
                className="text-[#a1a1aa]  "
                data-id="Onebox"
                onClick={(e) => handlePage(e)}
              ></BsFillInboxFill>
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33317 11.2857H4.6665V24.1191H9.33317V11.2857Z"
                  fill="#AEAEAE"
                />
                <path
                  d="M23.3332 15.9524H18.6665V24.1191H23.3332V15.9524Z"
                  fill="#AEAEAE"
                />
                <path
                  d="M16.3332 5.45239H11.6665V24.1191H16.3332V5.45239Z"
                  fill="#AEAEAE"
                />
              </svg>
            </div>

            <div>
              <div type="button">
                <button>
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted dark:bg-gradient-to-r dark:from-[#4B63DD] dark:to-[#0524BFFC] bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      2
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
