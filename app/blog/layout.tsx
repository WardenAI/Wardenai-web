import Image from "next/image";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <Link href="/">
          <Image src="/logo.svg" alt="Warden" width={140} height={36} priority />
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/product" className="hover:text-slate-900 transition-colors">Product</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-slate-900 transition-colors font-medium text-slate-900">Blog</Link>
          <a href="mailto:amar@wardenai.dev" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
      </nav>
      {children}
      <footer className="border-t border-slate-100 px-8 py-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <span>&copy; 2026 Warden. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/blog" className="hover:text-slate-600 transition-colors">Blog</Link>
          <a href="mailto:amar@wardenai.dev" className="hover:text-slate-600 transition-colors">Contact</a>
          <a href="mailto:privacy@wardenai.dev" className="hover:text-slate-600 transition-colors">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
