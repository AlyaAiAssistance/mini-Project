"use client";

import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;

const SLIDES = [
  {
    src: UNSPLASH("1507525428034-b723cf961d3e"),
    alt: "Tropical beach resort with clear blue water",
    title: "Maldives Safe Haven",
    subtitle: "Verified Safe Destination",
    meta: [
      { label: "Safety Score", value: "99%" },
      { label: "Response Time", value: "< 2 mins" },
      { label: "Cover", value: "Global SOS" },
    ],
  },
  {
    src: UNSPLASH("1488646953014-85cb44e25828"),
    alt: "Traveler standing near traditional Japanese temple",
    title: "Kyoto Heritage",
    subtitle: "24/7 Monitored Region",
    meta: [
      { label: "Safety Score", value: "99%" },
      { label: "Response Time", value: "< 1 min" },
      { label: "Cover", value: "Geofence Active" },
    ],
  },
  {
    src: UNSPLASH("1502602898657-3e91760cbb34"),
    alt: "Paris Eiffel Tower view at golden hour",
    title: "Paris Safe Zone",
    subtitle: "Tourist Protection Active",
    meta: [
      { label: "Safety Score", value: "96%" },
      { label: "Response Time", value: "< 3 mins" },
      { label: "Cover", value: "Live Alerts" },
    ],
  },
  {
    src: UNSPLASH("1499856871958-5b9627545d1a"),
    alt: "Historic Colosseum in Rome",
    title: "Rome Sentinel",
    subtitle: "Smart City Shield",
    meta: [
      { label: "Safety Score", value: "97%" },
      { label: "Response Time", value: "< 2 mins" },
      { label: "Cover", value: "Verified Hotels" },
    ],
  },
  {
    src: UNSPLASH("1530521954074-e64f6810b32d"),
    alt: "Scenic mountain range in Swiss Alps",
    title: "Swiss Alps Express",
    subtitle: "Alpine Emergency Guard",
    meta: [
      { label: "Safety Score", value: "98%" },
      { label: "Response Time", value: "< 1 min" },
      { label: "Cover", value: "Rescue Connect" },
    ],
  },
];

export default function CoverflowCarouselDemo() {
  return (
    <div className="w-full overflow-hidden bg-slate-50 py-10 dark:bg-[#071424]">
      <CoverflowCarousel slides={SLIDES} showCaption showPagination />
    </div>
  );
}
