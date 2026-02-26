declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Tells TypeScript to stop panicking when you import CSS files from Swiper
declare module 'swiper/css';
declare module 'swiper/css/pagination';