import axios from "axios";

async function sendJudgment(judgmentData) {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/v1/Judgments/sendJudgment`,
      judgmentData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = response.data;

    if (response.status !== 200) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}

export default sendJudgment;
