"use client";

import CardDwelling from "@/components/CardDwelling";

export default function ListDwellings({ dwellings }) {
  return (
    <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center mt-8 gap-[30px]">
      {dwellings?.map((dwelling) => (
        <CardDwelling key={dwelling._id} dwelling={dwelling} />
      ))}
    </div>
  );
}
