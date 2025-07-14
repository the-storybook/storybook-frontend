import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <div className="w-full flex-1">{children}</div>
      <Footer />
    </div>
  );
}
