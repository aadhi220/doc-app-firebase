import { useEffect } from "react";
import { useGlobalContext } from "../contextApi/context";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Paper } from "@mui/material";
import MicroDisplay from "./MicroDisplay";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function DocList() {
  const navigate = useNavigate();

  const { getUserDocs, userDocs, handleDelete,searchKey } = useGlobalContext();

  useEffect(() => {
    getUserDocs();
  },[searchKey]);


  
  return (
    <div className="flex flex-wrap gap-4 w-full h-full place-content-center sm:place-content-start py-3">
      {userDocs ? (
        userDocs.map((doc) => (
          <Paper className="w-[12rem] h-[15rem] overflow-hidden" key={doc.id}>
            <div
              onClick={() => {
                navigate(`/edit/${doc.id}`);
              }}
              className=" "
            >
              {" "}
              <MicroDisplay htmlContent={doc.content} />
            </div>

            <div className="w-[100%] px-2 border h-[100%]">
              <h5 className="mt-3 max-w-[9rem] overflow-hidden">{doc.title}</h5>
              <div className="flex text-[.7rem] gap-1 place-content-start place-items-center h-[] text-[#596585]">
                <span className="w-[20px]">
                  <img className="w-[100%]" src={logo} alt="" />
                </span>
                <span>Opened</span>
                <span>
                  {doc?.createdOn?.toDate().toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <button
                  className="ms-4 rounded-full  hover:bg-gray-200"
                  onClick={() => handleDelete(doc.id)}
                >
                  {" "}
                  <DeleteForeverIcon fontSize="small" />
                </button>
              </div>
            </div>
          </Paper>
        ))
      ) : (
        <p>create a new doc</p>
      )}
    </div>
  );
}
