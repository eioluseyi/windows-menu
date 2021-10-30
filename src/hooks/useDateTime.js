import { useEffect, useState } from "react";

const useDateTime = () => {
  const [dateTime, setDateTime] = useState("");
  const [dateTimeTitle, setDateTimeTitle] = useState("");

  useEffect(() => {
    // Inject the time in the UI
    const renderTime = () => {
      const time = new Date();
      setDateTime(
        time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        }) +
          "\r\n" +
          time.toLocaleString("en-NG", {
            year: "numeric",
            month: "numeric",
            day: "numeric"
          })
      );

      setDateTimeTitle(
        time.toLocaleString("en-NG", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }) +
          "\r\n" +
          time.toLocaleString("en-NG", { weekday: "long" })
      );
    };

    // Render the time on load
    renderTime();

    // Update the time every second
    const renderTimer = setInterval(renderTime, 1000);

    return () => clearInterval(renderTimer);
  }, []);

  return { dateTime, dateTimeTitle };
};
export default useDateTime;
