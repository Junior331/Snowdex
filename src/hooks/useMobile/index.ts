import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export const useMobile = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1200);

  useEffect(() => {
    const onResize = (): void => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [window]);

  return [isMobile, setIsMobile];
};
