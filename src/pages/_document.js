import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                {/* Favicon - múltiplos formatos para compatibilidade com Vercel */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />

                {/* Meta tags */}
                <meta name="msapplication-TileColor" content="#2563eb" />
                <meta name="theme-color" content="#2563eb" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
