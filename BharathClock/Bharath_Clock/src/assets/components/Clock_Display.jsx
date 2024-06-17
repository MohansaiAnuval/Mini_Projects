let Clock_Display = () => {
  const now = new Date();
  // const currentTime = now.toTimeString();
  const minutes = now.getMinutes();
  let hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  const currentdate = now.toDateString();
  const currentYear = now.getFullYear();
  return (
    <div id="time-display">
      <span id="Time">{formattedTime}</span>
      <br />

      <span id="date">{currentdate}</span>
      <br />

      <span id="year">{currentYear}</span>
    </div>
  );
};
export default Clock_Display;
