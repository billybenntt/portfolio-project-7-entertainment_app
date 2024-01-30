import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import '@/styles/output.css'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Portfolio Project 7",
    description: "Entertainment APP",
};


type RootLayout = {
    children: React.ReactNode[];
}


export default function RootLayout({children}: RootLayout) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
