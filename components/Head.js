import Head from 'next/head'

export default function HeadObject() {
    const title = "Alamo City Hacks | Westworld";
    const description = "San Antonio's First Cyberchallenge for High Schoolers.";
    const keywords = "hackathon, cyberchallenge, high school, san antonio, tech, coding, programming, fun";
    const author = "Alamo City Hacks";
    const image = "https://alamocityhacks.com/ogimage.png"
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:url" content="https://alamocityhacks.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="alamocityhacks.com" />
            <meta property="twitter:url" content="https://alamocityhacks.com" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <script src="/modals.js" />
        </Head>
    )
}