import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import SpinLoading from "@/components/SpinLoading";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<SpinLoading />}>
        <EventList query={query} />
      </Suspense>
    </section>
  );
}
