function TimeAgo({ datetime }) {
  const getHoursAndMinutesAgo = (dateTimeString) => {
    const now = new Date();
    const date = new Date(dateTimeString);

    const timeDiff = now - date;
    const hoursAgo = Math.floor(timeDiff / 3600000); // 3600000 milliseconds in an hour
    const minutesAgo = Math.floor((timeDiff % 3600000) / 60000); // 60000 milliseconds in a minute
    const secondAgo = Math.floor((timeDiff % 60000) / 1000); // 1000 milliseconds in a second

    return { hoursAgo, minutesAgo, secondAgo };
  };

  const { hoursAgo, minutesAgo, secondAgo } = getHoursAndMinutesAgo(datetime);

  return (
    <div>
      {datetime && (
        <p>
          {hoursAgo > 0 && `${hoursAgo}` + "h"}{" "}
          {minutesAgo > 0 && `${minutesAgo}` + "m"}{" "}
          {secondAgo > 0 && `${secondAgo}` + "s"} ago
        </p>
      )}
    </div>
  );
}
export default TimeAgo;
