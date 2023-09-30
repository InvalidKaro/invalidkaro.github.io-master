import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Invalid Karo Portfolio - Fullstack Developer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Invalid Karo Portfolio - Fullstack Developer" />
            <meta name="description"
                content="Invalid Karo's (invalidkaro) Personal Portfolio Website" />
            <meta name="author" content="Invalid Karo (invalidkaro)" />
            <meta name="keywords"
                content="invalidkaro, invalidkaro's portfolio, invalidkaro linux, ubuntu portfolio, Invalid Karo protfolio,Invalid Karo computer, Invalid Karo, invalid ubuntu, Invalid Karo ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Invalid Karo Portfolio - Fullstack Developer" />
            <meta itemProp="description"
                content="Invalid Karo's (invalidkaro) Personal Portfolio Website" />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Invalid Karo Portfolio - Fullstack Developer" />
            <meta name="twitter:description"
                content="Invalid Karo's (invalidkaro) Personal Portfolio Website" />
            <meta name="twitter:site" content="invalidkaro" />
            <meta name="twitter:creator" content="invalidkaro" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Invalid Karo Portfolio - Fullstack Developer" />
            <meta name="og:description"
                content="Invalid Karo's (invalidkaro) Personal Portfolio Website" />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://invalidkaro.github.io/" />
            <meta name="og:site_name" content="Invalid Karo Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
