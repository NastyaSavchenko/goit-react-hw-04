import { Audio } from "react-loader-spinner";
import s from "./Loader.module.css";

function Loader() {
  return (
    <div className={s.loaderBox}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default Loader;
