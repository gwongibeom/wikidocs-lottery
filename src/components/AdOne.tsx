import { useEffect, useRef } from 'react';
import './AdOne.css';

const AdOne = () => {
  const scriptElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://t1.daumcdn.net/kas/static/ba.min.js');
    script.setAttribute('charset', 'utf-8');

    script.setAttribute('async', 'true');
    scriptElement.current?.appendChild(script);
  }, []);
  return (
    <>
      <div ref={scriptElement} className='scriptElement'>
        <ins className='kakao_ad_area' style={{ display: 'none' }} data-ad-unit='DAN-XwXkOFf8r8rTnNd9' data-ad-width='728' data-ad-height='90'></ins>
      </div>
    </>
  );
};

export default AdOne;
