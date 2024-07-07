import React from 'react';
import Marquee from 'react-fast-marquee';
import { isMobile } from 'react-device-detect';
// import '../index.css';

const currencies = [
  { name: "US Dollar (USD) - $", image: "/CurrencyImages/USA.png" },
  { name: "Euro (EUR) - €", image: "/CurrencyImages/Europe.png" },
  { name: "Swiss Frank (CHF) - CHF", image: "/CurrencyImages/swisspng.png" },
  { name: "British Pound (GBP) - £ ", image: "/CurrencyImages/UKpng.png" },
  { name: "Australian Dollar (AUD) - A$", image: "/CurrencyImages/AUStrpng.png" },
  { name: "Canadian Dollar (CAD) - C$", image: "/CurrencyImages/Canadapng.png" },
  { name: "Singapore Dollar (SGD) - S$ ", image: "/CurrencyImages/Singapng.png" },
  { name: "Malaysian Ringgit (MYR) - RM", image: "/CurrencyImages/malpng.png" },
  { name: "UAE Dirham (AED) - د.إ", image: "/CurrencyImages/uae.png" },
  { name: "Thai Baht (THB) - ฿ ", image: "/CurrencyImages/thailand.png" },
  { name: "Japanese Yen (JPY) - ¥", image: "/CurrencyImages/japan.png" },
  { name: "Chinese Yuan (CNY) - ¥ (or 元)", image: "/CurrencyImages/chinapng.png" },
  { name: "Indonesian Rupiah (IDR) - Rp ", image: "/CurrencyImages/indo12.png" },
  { name: "Vietnamese Dong (VND) - ₫", image: "/CurrencyImages/viet.png" },
  { name: "New Zealand Dollar (NZD) - NZ$", image: "/CurrencyImages/newzz.png" },
  { name: "Hong Kong Dollar (HKD) - HK$", image: "/CurrencyImages/hk.png" },
  { name: "Saudi Riyal (SAR) - ر.س", image: "/CurrencyImages/saudiar.png" },
  { name: "Turkish Lira (TRY) - ₺ ", image: "/CurrencyImages/turkey.png" },
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
    <div className='px-1'> {/* Consistent padding on left and right */}
      <div className="flex items-center justify-between h-12 max-w-full mx-auto mb-1 overflow-hidden bg-gray-100 shadow-inner rounded-xl ">
        <div className="sm:hidden flex-shrink-0 px-1 py-2 bg-gray-300 z-10  flex flex-col items-center justify-center font-semibold text-[10px] shadow-inner rounded-lg">
          <div>We Buy</div>
          <div>We Sell</div>
        </div>
        <div className="hidden text-sm sm:flex-shrink-0 sm:px-1 sm:py-2 sm:bg-gray-300 sm:pr-2 sm:z-10 sm:h-12 sm:flex sm:items-center sm:font-semibold sm:mr-auto sm:shadow-inner sm:rounded-lg sm:w-auto sm:whitespace-nowrap">
          We Buy & We Sell
        </div>

        <Marquee speed={60} pauseOnHover direction="right" className="flex items-center flex-grow px-1 py-2 mx-3 overflow-hidden whitespace-nowrap">
          {currencies.map((currency, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center px-1 py-2 mx-1 rounded-2xl"> {/* Reduced margin and padding */}
                <img src={currency.image} alt={currency.name} className="w-12 h-6" /> {/* Adjusted image size */}
                <div className="font-serif text-xs font-light whitespace-nowrap"> {/* Font size reduced */}
                  <b>{currency.name}</b>
                </div>
                <div className="w-px h-12 mx-2 bg-gray-500"></div> {/* Adjusted divider height and margin */}
              </div>
              
            </React.Fragment>
          ))}
        </Marquee>
        <button
          className="flex-shrink-0 bg-[#ffb72b] text-white font-bold border-none px-1 py-2 cursor-pointer outline-none transition duration-300 ease-in-out hover:bg-[#ffb72b] h-12 flex items-center shadow-current text-[10px] sm:text-sm rounded-lg"
          onClick={handleContactUs}
        >
          Contact Us {/* Button padding and text size reduced */}
        </button>
      </div>
    </div>
  );
  
};

export default CurrencyScroll;