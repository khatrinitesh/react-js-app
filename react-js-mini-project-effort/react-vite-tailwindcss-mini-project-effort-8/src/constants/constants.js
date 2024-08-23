export const BannerData = [
    { page: 'home', title: 'Home Page', description: 'Welcome to the home page!' },
    { page: 'about', title: 'About Us', description: 'Learn more about us.' },
    { page: 'services', title: 'Our Services', description: 'Discover our services.' },
    { page: 'contact', title: 'Contact Us', description: 'Get in touch with us.' }
  ];

  export const PATHS = {
    HOME: '/',
    ABOUT: '/about',
    SERVICES: '/services',
    CONTACT: '/contact',
  };

  export const HEADER_LINKS = [
    { url:PATHS.HOME, label: 'Home' },
    { url: PATHS.ABOUT, label: 'About Us' },
    { url:PATHS.SERVICES, label: 'Services' },
    { url: PATHS.CONTACT, label: 'Contact Us' }
  ];

  export const MIN_RATING = 1;
    export const MAX_RATING = 5;
    export const DEFAULT_RATING = 3;
    // If you use decimal values (e.g., 0.5 increments)
export const DECIMAL_RATINGS = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

export const RATING_LABELS = {
    1: 'Very Poor',
    2: 'Poor',
    3: 'Average',
    4: 'Good',
    5: 'Excellent'
  };

  export const STAR_ICON = '⭐';  // You can use Unicode or import SVGs
export const EMPTY_STAR_ICON = '☆';

export const RATING_THRESHOLDS = {
    POOR_THRESHOLD: 2,
    AVERAGE_THRESHOLD: 3,
    GOOD_THRESHOLD: 4
  };
  
  export const RATING_SCALE = {
    MIN: 1,
    MAX: 5,
    STEP: 0.5  // If using decimal increments
  };