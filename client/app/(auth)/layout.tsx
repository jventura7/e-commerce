import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-h-screen flex-col items-center bg-zinc-900`}>
      <Link className="mb-20 p-10 text-3xl font-medium text-white" href="/">
        commerce.
      </Link>
      {children}
    </div>
  );
}
