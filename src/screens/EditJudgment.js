import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import getJudgment from "../api/judgment/getJudgment";
import Loader from "../components/ui/Loader";
import UpdateJudgment from "../components/UpdateJudgment";

function EditJudgment() {
  const { id } = useParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Judgment", id],
    queryFn: () => getJudgment(id),
  });

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>ערוך פסק דין</h2>
      <UpdateJudgment data={data.data} judgmentId={id} />
    </div>
  );
}

export default EditJudgment;
