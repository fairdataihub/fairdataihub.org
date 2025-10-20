import dayjs from 'dayjs';

interface EventDateItemProps {
  startDateTime: string;
  endDateTime: string;
}

const EventDates: React.FC<EventDateItemProps> = ({
  startDateTime,
  endDateTime,
}) => {
  const isSameDay = dayjs(startDateTime).isSame(dayjs(endDateTime), `day`);
  const isTimeProvided = dayjs(startDateTime).format(`hh:mm a`) !== `12:00 am`;

  return (
    <p className="font-medium text-slate-100">
      <time>
        {dayjs(startDateTime).format(
          isTimeProvided ? `MMMM D, YYYY - hh:mm a` : `MMMM D, YYYY`,
        )}
      </time>
      {` `}
      <span className="text-xs">to</span>
      {` `}
      {isSameDay ? (
        <time>{dayjs(endDateTime).format(`hh:mm a`)}</time>
      ) : (
        <time>
          {dayjs(endDateTime).format(
            isTimeProvided ? `MMMM D, YYYY - hh:mm a` : `MMMM D, YYYY`,
          )}
        </time>
      )}
    </p>
  );
};

export default EventDates;
