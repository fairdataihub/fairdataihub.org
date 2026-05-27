import dayjs from 'dayjs';

interface EventDateItemProps {
  startDateTime: string;
  endDateTime: string;
  short?: boolean;
}

const EventDates: React.FC<EventDateItemProps> = ({
  startDateTime,
  endDateTime,
  short = false,
}) => {
  const isSameDay = dayjs(startDateTime).isSame(dayjs(endDateTime), `day`);
  const isTimeProvided = dayjs(startDateTime).format(`hh:mm a`) !== `12:00 am`;

  return (
    <p className="font-medium text-slate-100">
      <time>
        {dayjs(startDateTime).format(
          isTimeProvided
            ? short
              ? `MMMM D, YYYY`
              : `MMMM D, YYYY - hh:mm a`
            : `MMMM D, YYYY`,
        )}
      </time>
      {` `}

      {` `}
      {isSameDay ? (
        <time>{short ? '' : 'to ' + dayjs(endDateTime).format(`hh:mm a`)}</time>
      ) : (
        <time>
          {'to ' +
            dayjs(endDateTime).format(
              isTimeProvided
                ? short
                  ? `MMMM D, YYYY`
                  : `MMMM D, YYYY - hh:mm a`
                : `MMMM D, YYYY`,
            )}
        </time>
      )}
    </p>
  );
};

export default EventDates;
