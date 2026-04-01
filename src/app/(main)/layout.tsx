export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 animate-page-in">{children}</main>
  );
}
