import { useMemo } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import styled from "styled-components";

import { useUsers } from "../context/UserContext";
import allJudgments from "../api/judgment/allJudgments";
import Table from "../components/Table";
import deleteJudgment from "../api/judgment/deleteJudgment";
import Loader from "../components/ui/Loader";

const Judgments = () => {
  const navigate = useNavigate();
  const { userData } = useUsers();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Judgments"],
    queryFn: () => allJudgments(),
  });

  const { mutate: handleDeleteJudgment } = useMutation({
    mutationFn: (judgmentId) => deleteJudgment(judgmentId),
    onSuccess: async () => {
      await refetch();
      toast.success("פסק הדין נמחק בהצלחה");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const handleEdit = (id) => {
    navigate(`/editjudgment/${id}`);
  };
  const handleDelete = (id) => {
    handleDeleteJudgment(id);
  };

  const myJudgments = useMemo(() => {
    if (!data || !data.data.judment) return [];
    const judgmentID = userData.id;
    return data.data.judment.filter((item) => item.judgmentID === judgmentID);
  }, [data, userData.id]);

  const columns = [
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
    {
      Header: "ערוך",
      Cell: ({ row }) => (
        <EditButton onClick={() => handleEdit(row.original._id)}>
          <FaEdit />
        </EditButton>
      ),
    },
    {
      Header: "מחק",
      Cell: ({ row }) => (
        <DeleteButton onClick={() => handleDelete(row.original._id)}>
          <FaTrash />
        </DeleteButton>
      ),
    },
  ];
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>פסקי הדין שלי</h2>
      <Table columns={columns} data={myJudgments} />
      <Button onClick={() => navigate("/")}>הוסף פסק דין חדש</Button>
    </div>
  );
};

export default Judgments;

const EditButton = styled.button`
  background-color: #2cb1bc;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a6c74;
  }
`;

const DeleteButton = styled.button`
  background-color: #c46b73;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #842029;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 80%;
  left: 42%;
  background-color: #2cb1bc; /* Set background color to green */
  color: white; /* Set text color to white */
  font-size: 20px; /* Set font size to be larger */
  font-weight: bold; /* Set font weight to bold */
  padding: 12px 20px; /* Add padding for better appearance */
  border: none; /* Remove border */
  border-radius: 10px; /* Add rounded corners */
  cursor: pointer; /* Add pointer cursor on hover */
  display: block; /* Make it a block element */
  margin: 0 auto; /* Center horizontally */
  width: 300px;
`;
