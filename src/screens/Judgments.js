import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import allJudgments from "../api/judgment/allJudgments";
import Table from "../components/Table";
import Loader from "../components/ui/Loader";

const Judgments = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Judgments"],
    queryFn: () => allJudgments(),
  });
  const columns = useMemo(
    () => [
      {
        Header: "סוג ההליך ומספרו",
        accessor: "procedureAndNumber",
      },
      {
        Header: "הרכאה",
        accessor: "court",
      },
      {
        Header: "הרכב",
        accessor: "judgeName",
      },
      {
        Header: "נושא",
        accessor: "matter",
      },
      {
        Header: "התובעים",
        accessor: "plaintiffs",
      },
      {
        Header: "באי כוח תובע",
        accessor: "attorney",
      },
      {
        Header: "נתבעים",
        accessor: "defendants",
      },
      {
        Header: "באי כוח נתבע",
        accessor: "defendantAttorney",
      },
      {
        Header: "המקרה",
        accessor: "caseSummary",
      },
      {
        Header: "החלטה",
        accessor: "judgment",
      },
    ],
    []
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>פסקי הדין</h2>
      <Table columns={columns} data={data.data.judment} />;
    </div>
  );
};
export default Judgments;
