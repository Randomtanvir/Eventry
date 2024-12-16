import Image from "next/image";
import Link from "next/link";
import dummy from "@/public/google-io-2023-1.png";
import ActionsButton from "../ActionsButton";

const EventCard = ({ event }) => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={event.imageUrl}
        alt="Event 1"
        width={500}
        height={500}
        className="w-full"
      />

      <div className="p-3">
        <Link href={`/details/${event.id}`} className="font-bold text-lg">
          {event.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event.loacation}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{event?.interested_ids.length} Interested</span>
          <span className="mx-1">|</span>
          <span>{event?.going_ids.length} Going</span>
        </div>

        {/* <!-- Buttons --> */}
        <div className="w-full flex gap-4 mt-4">
          <ActionsButton
            eventId={event?.id}
            interestedUserIds={event?.interested_ids}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
