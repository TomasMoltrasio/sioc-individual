import DwellingContainer from "@/containers/DwellingContainer";
import { fetchDwelling } from "@/services/fetchData";

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetchDwelling(id);

  // return metadata
  return {
    title: product?.dwelling?.address.streetNumber
      ? `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName} N°${product?.dwelling?.address.streetNumber}, ${product?.dwelling?.address.city}`
      : `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName}, ${product?.dwelling?.address.city}`,
    description: product?.dwelling?.generalDescription.replace(
      /(<([^>]+)>)/gi,
      ""
    ),
    image: product?.dwelling?.images[0]?.secure_url,
    // ...other metadata
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://sioc.vercel.app/dwelling/${id}`,
      title: product?.dwelling?.address.streetNumber
        ? `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName} N°${product?.dwelling?.address.streetNumber}, ${product?.dwelling?.address.city}`
        : `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName}, ${product?.dwelling?.address.city}`,
      description: product?.dwelling?.generalDescription.replace(
        /(<([^>]+)>)/gi,
        ""
      ),
      image: product?.dwelling?.images[0]?.secure_url,
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
  };
}

export default function Dwelling({ params: { id } }) {
  return <DwellingContainer id={id} />;
}
