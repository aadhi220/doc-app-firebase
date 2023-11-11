import { useGlobalContext } from "../../contextApi/context";
import "./Quill.min.css";
export default function TextEditor() {

const {wrapperRef}=useGlobalContext()
  return (
    <>
      <div className="container " ref={wrapperRef}></div>
    </>
  );
}
