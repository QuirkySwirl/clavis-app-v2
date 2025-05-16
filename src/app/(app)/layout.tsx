// This layout applies to all routes within the (app) group.
// For now, it's a simple pass-through, but can be customized later
// for app-specific UI elements (e.g., sidebar, different header/footer if needed).

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
