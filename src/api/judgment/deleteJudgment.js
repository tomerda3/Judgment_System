import axios from "axios";

async function deleteJudgment(judgementId) {
  try {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/v1/judgments/${judgementId}`
    );

    const responseData = response.data;

    if (!response.status === 200) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (err) {
    throw new Error(err);
  }
}

export default deleteJudgment;
