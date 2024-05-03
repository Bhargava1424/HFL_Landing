import React from 'react';
import '../index.css';

const currencies = [
    { name: "US Dollar", image: "/CurrencyImages/1631b58c-1889-4611-8b56-a830e6de7225.webp" },
    { name: "Euro", image: "/CurrencyImages/DALL·E 2024-05-03 13.20.31 - A highly detailed image of a Euro banknote, featuring complex watermark designs and security features typical of the Euro currency. The banknote shoul.webp" },
    { name: "British Pound", image: "/CurrencyImages/ALL·E 2024-05-03 13.20.32 - A detailed image of a British Pound note, highlighting its intricate security features and unique design elements that characterize the currency. The .webp" },
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

const CurrencyScroll = () => {
    return (
        <div className="sticky top-[100px] bg-white flex items-center py-2 shadow-md z-10 overflow-hidden relative">
            <div className="text-lg px-4 z-20 relative">We Buy & We Sell</div>
            <div className="flex animate-scroll whitespace-nowrap absolute left-0 right-0">
                {currencies.map((currency, index) => (
                    <div key={index} className="inline-block text-center mx-2 currency-box">
                        <div className="w-24 h-24 border-2 border-gray-300 rounded-md overflow-hidden">
                            <img src={currency.image} alt={currency.name} className="object-cover w-full h-full" />
                        </div>
                    </div>
                ))}
            </div>
            <button className="mr-4 bg-orange-500 text-white px-4 py-2 rounded-md z-20 relative">Contact Us</button>
        </div>
    );
}
export default CurrencyScroll;
