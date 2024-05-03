import React, { useEffect, useRef } from 'react';
import '../index.css';

const currencies = [
    { name: "US Dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
    { name: "Euro", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.31 - A highly detailed image of a Euro banknote, featuring complex watermark designs and security features typical of the Euro currency. The banknote shoul.webp" },
    { name: "British Pound", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.32 - A detailed image of a British Pound note, highlighting its intricate security features and unique design elements that characterize the currency. The .webp" },
    { name: "US Dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
    { name: "Euro", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.31 - A highly detailed image of a Euro banknote, featuring complex watermark designs and security features typical of the Euro currency. The banknote shoul.webp" },
    { name: "British Pound", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.32 - A detailed image of a British Pound note, highlighting its intricate security features and unique design elements that characterize the currency. The .webp" },
    { name: "US Dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
    { name: "Euro", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.31 - A highly detailed image of a Euro banknote, featuring complex watermark designs and security features typical of the Euro currency. The banknote shoul.webp" },
    { name: "British Pound", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.32 - A detailed image of a British Pound note, highlighting its intricate security features and unique design elements that characterize the currency. The .webp" },
    { name: "US Dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
    { name: "Euro", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.31 - A highly detailed image of a Euro banknote, featuring complex watermark designs and security features typical of the Euro currency. The banknote shoul.webp" },
    { name: "British Pound", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.32 - A detailed image of a British Pound note, highlighting its intricate security features and unique design elements that characterize the currency. The .webp" },
    { name: "US Dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
    { name: "Euro", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.31 - A highly detailed image of a Euro banknote, featuring complex watermark designs and security features typical of the Euro currency. The banknote shoul.webp" },
    { name: "British Pound", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.32 - A detailed image of a British Pound note, highlighting its intricate security features and unique design elements that characterize the currency. The .webp" },
    { name: "US Dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
    { name: "Euro", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.31 - A highly detailed image of a Euro banknote, featuring complex watermark designs and security features typical of the Euro currency. The banknote shoul.webp" },
    { name: "British Pound", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.32 - A detailed image of a British Pound note, highlighting its intricate security features and unique design elements that characterize the currency. The .webp" }

];

// Tripling the array
const tripledCurrencies = [...currencies, ...currencies, ...currencies];
 


const CurrencyScroll = () => {
    const scrollContainerRef = useRef(null);
  
    useEffect(() => {
      const element = scrollContainerRef.current;
      const totalWidth = element.scrollWidth / 2; // Half because we're duplicating the array
  
      const smoothScroll = () => {
        element.style.transform = 'translateX(0)';
        element.style.transition = 'none';
        requestAnimationFrame(() => {
          element.style.transition = 'transform 10s linear';
          element.style.transform = `translateX(-${totalWidth}px)`;
        });
      };
  
      smoothScroll();
      element.addEventListener('transitionend', smoothScroll);
  
      return () => {
        element.removeEventListener('transitionend', smoothScroll);
      };
    }, []);
  
    return (
      <div className="news-ticker">
        <div className="content-box">We Buy & We Sell</div>
        <div ref={scrollContainerRef} className="scroll-container animate-scroll">
          {tripledCurrencies.map((currency, index) => (
            <img key={index} src={currency.image} alt={currency.name} className="ticker-image"/>
          ))}
        </div>
        <button className="button-box">Contact Us</button>
      </div>
    );
  }

export default CurrencyScroll;
