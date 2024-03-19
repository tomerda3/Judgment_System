import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTable } from "react-table";

import allJudgments from "../api/judment/allJudgments";
import Table from "../components/Table";

const Judgments = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Judgments"],
    queryFn: () => allJudgments(),
  });
  // const data = useMemo(() => fakeData, []);
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>פסקי הדין</h2>
      <Table columns={columns} data={data.data.judment} />;
    </div>
  );
};
export default Judgments;
