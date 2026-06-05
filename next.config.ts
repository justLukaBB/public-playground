import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export für klassisches Webhosting (All-Inkl, Apache/PHP).
  output: "export",
  // Apache liefert /termin/ sauber als /termin/index.html aus.
  trailingSlash: true,
  images: {
    // Keine Server-Bildoptimierung bei statischem Export.
    unoptimized: true,
  },
};

export default nextConfig;
