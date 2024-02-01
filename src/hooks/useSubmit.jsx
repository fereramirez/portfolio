import { useState } from "react";
import axios from "axios";

//! VOLVER A VER agregar config para exportar .env
const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
} = process.env;

const useSubmit = (reset) => {
  const [waitingResponse, setWaitingResponse] = useState(false);
  const [response, setResponse] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = async (rawData) => {
    setWaitingResponse(true);
    setResponse(null);

    try {
      /* const formData = new FormData();

      formData.append("name", JSON.stringify(rawData.name));
      formData.append("email", JSON.stringify(rawData.email));
      formData.append("message", JSON.stringify(rawData.message));
      formData.append("service_id", REACT_APP_EMAILJS_SERVICE_ID);
      formData.append("template_id", REACT_APP_EMAILJS_TEMPLATE_ID);
      formData.append("user_id", REACT_APP_EMAILJS_PUBLIC_KEY); */

      const dataToSend = {
        service_id: REACT_APP_EMAILJS_SERVICE_ID,
        template_id: REACT_APP_EMAILJS_TEMPLATE_ID,
        user_id: REACT_APP_EMAILJS_PUBLIC_KEY,
        ...rawData,
      };

      const requestConfig = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send-form",
        dataToSend,
        requestConfig,
      );

      if (data === "OK") {
        setResponse("success");
        setTimeout(() => {
          setShowSuccess(true);
        }, 800);

        reset();
      }
    } catch (error) {
      console.log(error);
      setResponse("error");
    } finally {
      setWaitingResponse(false);
    }
  };

  return { sendEmail, waitingResponse, response, showSuccess };
};

export default useSubmit;
