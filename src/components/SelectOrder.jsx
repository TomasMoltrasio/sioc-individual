"use client";
import Cookies from "universal-cookie";

export default function SelectOrder({ options }) {
  const cookies = new Cookies();

  const transformName = (name) => {
    switch (name) {
      case "Menor precio":
        return { orderKeyByPrice: "cheapest" };
      case "Mayor precio":
        return { orderKeyByPrice: "expensive" };
      case "Mas recientes":
        return { orderKeyByDate: "newest" };
      case "Mas antiguos":
        return { orderKeyByDate: "oldest" };
    }
  };

  const handleChange = (e) => {
    const searchParams = transformName(e.target.value);
    const cookie = cookies.get("searchParams");
    cookies.set("searchParams", { ...cookie, ...searchParams });
  };

  return (
    <li>
      <select
        onChange={(e) => handleChange(e)}
        className="select select-ghost w-full"
      >
        <option disabled selected>
          Ordenar por
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </li>
  );
}
