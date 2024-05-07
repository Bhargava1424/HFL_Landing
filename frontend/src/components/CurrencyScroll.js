import React from 'react';
import Marquee from 'react-fast-marquee';
import '../index.css';

const currencies = [
  { name: "US Dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Euro", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.31 - A highly detailed image of a Euro banknote, featuring complex watermark designs and security features typical of the Euro currency. The banknote shoul.webp" },
  { name: "Swiss frank ", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.32 - A detailed image of a British Pound note, highlighting its intricate security features and unique design elements that characterize the currency. The .webp" },
  { name: "British pound ", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Australian dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Canadian dollar ", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Singapore dollar ", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Malaysian ringgit ", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Japanese yen", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Chinese yuan ", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Indonesian rupiah", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Vietnamese Dong ", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.32 - A detailed image of a British Pound note, highlighting its intricate security features and unique design elements that characterize the currency. The .webp" },
  { name: "New Zealand dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Hong Kong dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Saudi riyal", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
  { name: "Turkish lira", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
];

const CurrencyScroll = () => {
  return (
    <div className="news-ticker" style={{ marginTop: '95px', marginBottom: '5px' }}>
      <div className="content-box">We Buy & We Sell</div>
      <Marquee speed={30}  pauseOnHover direction='right'>
        {currencies.map((currency, index) => (
          <div key={index} className="ticker-item">
            <img src={currency.image} alt={currency.name} className="ticker-image" />
            <div className="ticker-separator">|</div>
            <div className="ticker-text"><b>{currency.name}</b></div>
          </div>
        ))}
      </Marquee>
      <button className="button-box">Contact Us</button>
    </div>
  );
}

export default CurrencyScroll;