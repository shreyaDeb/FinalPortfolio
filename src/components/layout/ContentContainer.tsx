export function ContentContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`content-container ${className}`}>{children}</div>;
}
