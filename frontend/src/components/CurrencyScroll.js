import React from 'react';
import Marquee from 'react-fast-marquee';
import { isMobile } from 'react-device-detect';
// import '../index.css';

const currencies = [
  { name: "US Dollar (USD) - $", image: "/CurrencyImages/USA.png" },
  { name: "Euro (EUR) - €", image: "/CurrencyImages/Europe.png" },
  { name: "Swiss frank (CHF) - CHF", image: "/CurrencyImages/swisspng.png" },
  { name: "British pound (GBP) - £ ", image: "/CurrencyImages/UKpng.png" },
  { name: "Australian dollar (AUD) - A$", image: "/CurrencyImages/AUStrpng.png" },
  { name: "Canadian dollar (CAD) - C$", image: "/CurrencyImages/Canadapng.png" },
  { name: "Singapore dollar (SGD) - S$ ", image: "/CurrencyImages/Singapng.png" },
  { name: "Malaysian ringgit (MYR) - RM", image: "/CurrencyImages/malpng.png" },
  { name: "UAE Dirham (AED) - د.إ", image: "/CurrencyImages/uae.png" },
  { name: "Thai Baht (THB) - ฿ ", image: "/CurrencyImages/thailand.png" },
  { name: "Japanese yen (JPY) - ¥", image: "/CurrencyImages/japan.png" },
  { name: "Chinese yuan (CNY) - ¥ (or 元)", image: "/CurrencyImages/chinapng.png" },
  { name: "Indonesian rupiah (IDR) - Rp ", image: "/CurrencyImages/indo12.png" },
  { name: "Vietnamese Dong (VND) - ₫", image: "/CurrencyImages/viet.png" },
  { name: "New Zealand dollar (NZD) - NZ$", image: "/CurrencyImages/newzz.png" },
  { name: "Hong Kong dollar (HKD) - HK$", image: "/CurrencyImages/hk.png" },
  { name: "Saudi riyal (SAR) - ر.س", image: "/CurrencyImages/saudiar.png" },
  { name: "Turkish lira (TRY) - ₺ ", image: "/CurrencyImages/turkey.png" },
];

const CurrencyScroll = () => {
  const handleContactUs = () => {
    const phoneNumber = '9876543210';
    if (isMobile) {
      // Redirect to the call app with the phone number
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Show a popup with the phone number
      alert(`Please call ${phoneNumber}`);
    }
  };

  return (
    <div className="flex items-center justify-between overflow-hidden h-20 mx-auto max-w-full bg-gray-100 px-1 rounded-sm shadow-inner mt-24 mb-2">
      <div className="flex-shrink-0 px-1 py-3 bg-gray-300 z-10 h-16 flex items-center font-semibold mr-auto shadow-inner rounded-lg aspect-680:px-1 aspect-680:text-sm">
        We Buy & We Sell
      </div>
      <Marquee speed={60} pauseOnHover direction="right" className="flex overflow-hidden whitespace-nowrap items-center flex-grow mx-5 px-5 py-3">
        {currencies.map((currency, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center mr-3 px-1 py-3">
              <img src={currency.image} alt={currency.name} className="h-12 w-15" />
              <div className="whitespace-nowrap font-serif font-light">
                <b>{currency.name}</b>
              </div>
              <div className="w-px h-16 bg-gray-500 mx-5"></div>
            </div>
            
          </React.Fragment>
        ))}
      </Marquee>
      <button
        className="flex-shrink-0 bg-orange-500 text-white font-bold border-none px-2 py-3 cursor-pointer outline-none transition duration-300 ease-in-out hover:bg-orange-600 h-16 flex items-center ml-auto shadow-current rounded-lg aspect-680:px-1 aspect-680:text-sm"
        onClick={handleContactUs}
      >
        Contact Us
      </button>
    </div>
  );
};

export default CurrencyScroll;