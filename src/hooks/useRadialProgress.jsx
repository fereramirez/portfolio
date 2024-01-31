import { useEffect, useState } from "react";

const initialMessageDegrees = 0;

const useRadialProgress = (watcher, maxLength) => {
  const [messageRemaining, setMessageRemaining] = useState(maxLength);
  const [messageDegrees, setMessageDegrees] = useState(initialMessageDegrees);

  useEffect(() => {
    setMessageRemaining(watcher ? maxLength - watcher.length : maxLength);

    const degrees = watcher ? (watcher.length * 360) / maxLength : 0;
    setMessageDegrees(degrees > 360 ? 360 : degrees);

    const textarea = document.getElementById("message-text-area");
    textarea.scrollTop = textarea.scrollHeight;
  }, [watcher]);

  return { messageRemaining, messageDegrees };
};

export default useRadialProgress;
