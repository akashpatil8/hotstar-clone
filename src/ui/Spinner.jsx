import { ClipLoader } from "react-spinners";

export function Spinner() {
  return (
    <div className="grid h-screen place-items-center">
      <ClipLoader color="blue" size={50} />;
    </div>
  );
}

export default Spinner;
