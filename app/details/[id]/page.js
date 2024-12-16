import EventDetails from "@/components/details/EventDetails";
import EventVanue from "@/components/details/EventVanue";
import HeroSection from "@/components/details/HeroSection";
import { getEvenById } from "@/db/queries";
import React from "react";

const EventDetailsPage = async ({ params: { id } }) => {
  const eventInfo = await getEvenById(id);

  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails eventInfo={eventInfo} />
          <EventVanue eventInfo={eventInfo} />
        </div>
      </section>
    </>
  );
};

export default EventDetailsPage;
