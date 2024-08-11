import { useContext, useEffect, useState } from "react";
import Inbox1 from "./Onebox1Componets/Inbox1";
import axios from "axios";
import { GlobalContext } from "../store/Store";

const Onebox1 = () => {
  const [data, setData] = useState([]);
  const { loginCredential, token } = useContext(GlobalContext);

  const url = "https://hiring.reachinbox.xyz/api/v1/onebox/list";

  console.log("token: " + token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem("authToken");

        // Check if the token is available
        if (!token) {
          throw new Error("No token found");
        }

        // Make the API request with the token in the Authorization header
        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Handle the response
        // setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        // Handle errors
        // setError(error);
      } finally {
        console.log("done");
        // setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex">
        <div>
          <Inbox1 data={data}></Inbox1>
        </div>
      </div>
    </>
  );
};

export default Onebox1;

// let data = [
//   {
//     id: 3,
//     fromName: "Shaw Adley",
//     fromEmail: "shaw@getmemeetings.com",
//     toName: "",
//     toEmail: "mitrajit2022@gmail.com",
//     cc: null,
//     bcc: null,
//     threadId: 1,
//     messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
//     inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
//     references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
//     subject:
//       "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
//     body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
//     isRead: true,
//     folder: "INBOX",
//     uid: 594,
//     sentAt: "2023-11-23T04:08:45.000Z",
//     archivedAt: null,
//     createdAt: "2023-11-23T07:38:46.000Z",
//     updatedAt: "2023-11-23T07:38:46.000Z",
//     deletedAt: null,
//   },
//   {
//     id: 4,
//     fromName: "Shaw Adley",
//     fromEmail: "shaw@getmemeetings.com",
//     toName: "",
//     toEmail: "mitrajit2022@gmail.com",
//     cc: null,
//     bcc: null,
//     threadId: 2,
//     messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
//     inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
//     references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
//     subject: "Test mail",
//     body: "<p>Test mail</p>",
//     isRead: true,
//     folder: "INBOX",
//     uid: 594,
//     sentAt: "2023-11-23T04:08:45.000Z",
//     archivedAt: null,
//     createdAt: "2023-11-23T07:38:46.000Z",
//     updatedAt: "2023-11-23T07:38:46.000Z",
//     deletedAt: null,
//   },
// ];
