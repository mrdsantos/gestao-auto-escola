"use client";

import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InfoBanner from "../Infobanner/Infobanner";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function LayoutSwitcher({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith("/dashboard");
    <div className="min-h-screen flex flex-col">
        <InfoBanner />
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
    </div>
    return isDashboard ? <div className="min-h-screen">{children}</div> : <div className="min-h-screen flex flex-col">
        <InfoBanner />
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
    </div>
}