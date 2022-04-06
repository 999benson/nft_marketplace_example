/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import logo2 from "../public/logo2.png";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 h-full w-full ">
      <nav className="flex sticky top-0 items-center justify-between flex-wrap shadow-lg bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 p-6  shadow-blue-500/50 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ">
          <Image
            src={logo2}
            alt="no"
            h-8
            w-8
            mr-2
            width={54}
            height={54}
            viewBox="0 0 54 54"
          />

          <span className="font-semibold antialiased pl-3 drop-shadow-md first-letter:text-4xl text-l tracking-tight">
            MILKY WAY
          </span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="pl-5 text-xl lg:flex-grow antialiased">
            <Link href="/">
              <a
                href="#responsive-header"
                className="block pr-8 mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-purple-600 mr-4"
              >
                MARKETPLACE
              </a>
            </Link>
            <Link href="/my-nft">
              <a
                href="#responsive-header"
                className="block pr-8 mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-purple-600"
              >
                {/* view own digital assets (collections) */}
                MY NFT
              </a>
            </Link>
            <Link href="/dashboard">
              <a
                href="#responsive-header"
                className="block pr-12 mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-purple-600"
              >
                {/* view creator's own NFTs, shows what creator's created and sold */}
                DASHBOARD
              </a>
            </Link>
          </div>
          <div className="sell pr-8">
            <Link href="/create-nft">
              <a
                href="#"
                className="inline-block  text-l px-5 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-fuchsia-500 hover:bg-white/50 mt-4 lg:mt-0 shadow-lg shadow-indigo-400/60"
              >
                SELL
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
