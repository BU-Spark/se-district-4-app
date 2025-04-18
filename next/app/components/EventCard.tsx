// Event Card Component
type EventCardProps = {
  date: string;
  time: string;
  description: string;
};

export function EventCard({ date, time, description }: EventCardProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <p className="italic text-gray-500">{date}</p>
      <p className="font-semibold bg-gray-300 inline-block px-2 py-1 rounded-md">
        {time}
      </p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
