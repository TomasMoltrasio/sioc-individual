"use client";

import CardDwelling from "@/components/CardDwelling";

export default function ListDwellings({ dwellings }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 w-full gap-[30px]">
      {dwellings?.map((dwelling) => (
        <CardDwelling key={dwelling._id} dwelling={dwelling} />
      ))}
    </div>
  );
}
