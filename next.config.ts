import type { NextConfig } from "next";

// Frontend and API are now served from the same Express/Next process, so
// uploaded images resolve as same-origin relative paths — no remotePatterns needed.
const nextConfig: NextConfig = {};

export default nextConfig;
