import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import getJudgment from "../api/judgment/getJudgment";
import Loader from "../components/ui/Loader";
import UpdateJudgment from "../components/UpdateJudgment";

function EditJudgment() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["Judgment"],
    queryFn: () => getJudgment(id),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>ערוך פסק דין</h2>
      <UpdateJudgment data={data.data} />
    </div>
  );
}

export default EditJudgment;
