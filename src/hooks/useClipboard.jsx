import { useState } from "react";

const useClipboard = () => {
  const [textCopied, setTextCopied] = useState(false);

  const copyToClipboard = (text) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      setTextCopied(true);

      navigator.clipboard.writeText(text);

      return true;
    }

    return Promise.reject(new Error("The Clipboard API is not available."));
  };

  return { copyToClipboard, textCopied };
};

export { useClipboard };
