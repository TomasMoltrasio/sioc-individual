"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

export default function LightboxContainer({ image }) {
  const inline = {
    style: {
      width: "100%",
      maxWidth: "900px",
      aspectRatio: "3 / 2",
      margin: "0 auto",
    },
  };

  const slides = image.map((img) => ({ src: img.secure_url }));

  return (
    <Lightbox
      styles={{
        container: {
          background: "rgba(0, 0, 0, 0)",
          borderRadius: "15px",
        },
      }}
      slides={slides}
      carousel={{
        interval: 3000,
        transitionDuration: 1000,
        imageFit: "cover",
      }}
      plugins={[Fullscreen, Inline, Slideshow]}
      inline={inline}
    />
  );
}
