import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Oval
        visible={true}
        height="50"
        width="50"
        color="#14919b"
        secondaryColor="#87eaf2"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
