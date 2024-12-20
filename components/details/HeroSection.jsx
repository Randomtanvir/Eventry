import Image from "next/image";
import React from "react";

import ActionsButton from "../ActionsButton";
import { getBlurData } from "@/utils/blur-generator";

const HeroSection = async ({ eventInfo }) => {
  const { base64 } = await getBlurData(eventInfo?.imageUrl);
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={eventInfo?.imageUrl}
          width={900}
          height={900}
          alt="Event 1"
          className="h-[450px] mx-auto"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>

      {/* <!-- Details --> */}
      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{eventInfo?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{eventInfo?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{eventInfo?.interested_ids.length} Interested</span>
            <span className="mx-1">|</span>
            <span>{eventInfo?.going_ids.length} Going</span>
          </div>
        </div>

        <div className="w-full flex gap-4 mt-4 flex-1 ">
          <ActionsButton
            eventId={eventInfo?.id}
            interestedUserIds={eventInfo?.interested_ids}
            goingUserIds={eventInfo?.going_ids}
            fromDetails={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
