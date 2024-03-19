import axios from "axios";

async function allJudgments() {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/judgments`);

    const responseData = response.data;

    if (response.status !== 200) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (err) {
    throw new Error(err);
  }
}

export default allJudgments;
