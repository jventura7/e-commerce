'use client';

import { useState, useEffect } from 'react';

export default function useScrenSize() {
  const [isDesktop, setDesktop] = useState<boolean>(window.innerWidth > 767);

  useEffect(() => {
    const updateMedia = () => {
      setDesktop(window.innerWidth > 767);
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('reisze', updateMedia);
  });

  return { isDesktop };
}
