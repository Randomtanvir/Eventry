import EventDetails from "@/components/details/EventDetails";
import EventVanue from "@/components/details/EventVanue";
import HeroSection from "@/components/details/HeroSection";
import SpinLoading from "@/components/SpinLoading";
import { getEvenById } from "@/db/queries";
import { Suspense } from "react";

export const generateMetadata = async ({ params: { id } }) => {
  const eventInfo = await getEvenById(id);
  return {
    title: `Eventry - ${eventInfo?.name}`,
    description: eventInfo?.details,
    openGraph: {
      images: [eventInfo?.imageUrl],
    },
  };
};

const EventDetailsPage = async ({ params: { id } }) => {
  const eventInfo = await getEvenById(id);

  return (
    <>
      <Suspense fallback={<SpinLoading />}>
        <HeroSection eventInfo={eventInfo} />
      </Suspense>
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <Suspense fallback={<SpinLoading />}>
            <EventDetails eventInfo={eventInfo} />
          </Suspense>
          <Suspense fallback={<SpinLoading />}>
            <EventVanue eventInfo={eventInfo} />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default EventDetailsPage;
