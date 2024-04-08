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

  return (
    <p className="font-medium text-slate-500">
      <time>{dayjs(startDateTime).format(`MMMM D, YYYY - hh:mm a`)}</time>
      {` `}
      <span className="text-sm font-normal text-slate-400">to</span>
      {` `}
      {isSameDay ? (
        <time>{dayjs(endDateTime).format(`hh:mm a`)}</time>
      ) : (
        <time>{dayjs(endDateTime).format(`MMMM D, YYYY - hh:mm a`)}</time>
      )}
    </p>
  );
};

export default EventDates;
