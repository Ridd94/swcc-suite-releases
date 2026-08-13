export default function Stars({
  rating = 5,
  className = "",
}: {
  rating?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex text-accent-500 ${className}`}
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden className={i < rating ? "" : "opacity-25"}>
          ★
        </span>
      ))}
    </span>
  );
}
