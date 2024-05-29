import { ClipLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="grid h-screen place-items-center">
      <ClipLoader color="blue" size={50} />;
    </div>
  );
}
