import { useEffect } from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { device } from 'styles/Mixin';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const gsapFunc = (elem: any) => {
  let delay = 0;
  let y = 100;
  elem.style.opacity = '0';

  if (elem.dataset.y) {
    y = elem.dataset.y;
  }

  if (elem.dataset.delay) {
    delay = elem.dataset.delay * 0.33;
  }

  if (elem.src) {
    elem.src = elem.src.substring(0, elem.src.length - 3) + 'gif';
  }

  gsap.fromTo(
    elem,
    { y: y, opacity: 0, autoAlpha: 0 },
    {
      y: 0,
      duration: 1.5,
      delay: delay,
      opacity: 1,
      autoAlpha: 1,
      ease: 'ease-in-out',
      overwrite: 'auto',
    }
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fade = gsap.utils.toArray('.fade');
    fade.forEach((elem: any) => {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => {
          gsapFunc(elem);
        },
        scrub: true,
        onEnterBack: () => {
          gsapFunc(elem);
        },
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>땅콩스쿨</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="원티드 프리온보딩 프론트엔드 코스 다섯번째 과제"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="땅콩스쿨" />
        <meta property="og:url" content="https://ddangkongschool.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ddangkongschool.com/meta_img.png"
        />
        <meta
          property="og:description"
          content="캐릭터 선생님과 함께 실시간으로 즐기는 독서클래스"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/earlyaccess/notosanskr.css"
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={{ device }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
