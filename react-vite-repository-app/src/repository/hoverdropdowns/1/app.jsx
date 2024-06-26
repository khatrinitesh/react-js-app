import React, { useState } from 'react';

const CustomApp = () => {
    const dropdownItems = [
        { title: 'Option 1', href: '#' },
        { title: 'Option 2', href: '#' },
        { title: 'Option 3', href: '#' },
      ];
    
  return (
    <>
        <Dropdown title="Dropdown" items={dropdownItems}/>
    </>
  )
}

export default CustomApp

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12l-6-6h12l-6 6z"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };