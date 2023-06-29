'use client';
import Image from 'next/image';
import desktopHero from '@/assets/home/desktop/image-hero.jpg';
import mobileHero from '@/assets/home/mobile/image-header.jpg';
import useScrenSize from '@/hooks/useScreenSize';

export default function Home() {
  const { isDesktop } = useScrenSize();

  return (
    <div
      className={`flex w-full items-center justify-center bg-zinc-900 text-white`}
    >
      {isDesktop ? (
        <div className="relative">
          <Image alt="desktop-hero" width={1200} src={desktopHero}></Image>
          <div className="absolute left-20 top-20 flex max-w-sm flex-col space-y-6">
            <h3 className="tracking-[.5em] text-yellow-700">NEW PRODUCT</h3>
            <h1 className="text-5xl font-medium leading-[1.25]">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="leading-loose">
              Experience natrual, likelife audio and exceptional build quality
              made for the passionate music enthusiast
            </p>
            <button className="w-40 bg-yellow-700 p-6 py-2 tracking-widest text-white">
              SEE MORE
            </button>
          </div>
        </div>
      ) : (
        <Image alt="mobile-hero" height={450} src={mobileHero}></Image>
      )}
    </div>
  );
}
