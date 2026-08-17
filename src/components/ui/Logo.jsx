import logoMark from "../../assets/logo.png";
import logoFull from "../../assets/topknotch-full.png";

/**
 * Logo component — uses the real brand assets.
 * @param {"mark" | "full"} variant - "mark" for hex icon only, "full" for horizontal lockup
 */
export default function Logo({ variant = "full", className = "" }) {
  if (variant === "mark") {
    return (
      <img
        src={logoMark}
        alt="TopKnotch Trade Services"
        className={`w-14 h-14 md:w-16 md:h-16 ${className}`}
        draggable="false"
      />
    );
  }

  return (
    <img
      src={logoFull}
      alt="TopKnotch Trade Services"
      className={`h-12 md:h-14 w-auto ${className}`}
      draggable="false"
    />
  );
}
