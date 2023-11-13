import { useGlobalContext } from "../../contextApi/context";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../QuillToolBar";
import "react-quill/dist/quill.snow.css";
import "./Quill.min.css";
export default function TextEditor() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const param = useParams();
  // console.log("docid", param.id);
  const { authUser, setDocData } = useGlobalContext();

  useEffect(() => {
    // console.log("Mounted");
    const getData = async () => {
      try {
        const querySnapShot = await getDoc(
          doc(db, "UserDocData", authUser.uid, "docs", param.id)
        );
        if (querySnapShot.exists() === false) {
          navigate("/");
        }
        setDocData(querySnapShot.data());
        setValue(querySnapShot.data().content);
      } catch {
        console.log("unautherised access");
      }
    };
    getData();
  }, []);
  const handlerEditorChange = (newContent) => {
    setValue(newContent);
    updateDoc(doc(db, "UserDocData", authUser.uid, "docs", param.id), {
      content: value,
    });
  };

  // console.log(value);
  return (
    <div className="container">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(e) => handlerEditorChange(e)}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
