export const handleCopyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      alert("Successfully copied code snippet to clipboard!");
    },
    (err) => {
      console.error("Please Try Again!", err);
    }
  );
};
