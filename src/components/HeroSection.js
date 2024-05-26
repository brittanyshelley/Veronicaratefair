// components/HeroSection.js

// import Image from 'next/image';
// // import styles from '../styles/HeroSection.module.css'; // Assuming you are using CSS Modules for styling

// const HeroSection = () => {
//   return (
//     <div data-theme="mytheme">
//       <div className="hero min-h-screen relative bg-cover bg-center" style={{ backgroundImage: `url('/vj-von-art-BP1Ze0qcp-c-unsplash.jpg')` }}>
//         <div className="hero-overlay bg-opacity-10"></div>
//         {/* Adjusted hero-content for bottom-center alignment */}
//         <div className="hero-content text-accent w-full absolute bottom-0 text-center pb-10">
//           <div className="max-w-md mx-auto">
//             <h1 className="mb-5 text-5xl font-bold">Getting a Mortgage doesn&apos;t have to be complicated</h1>
//             {/* <button className="btn btn-primary">Free Consultation</button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// };

// export default HeroSection;


import Image from 'next/image';

const HeroSection = () => {
  return (
    <div data-theme="mytheme">
      <div className="hero min-h-screen relative bg-cover bg-center" style={{ backgroundImage: `url('/vj-von-art-BP1Ze0qcp-c-unsplash.jpg')` }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        {/* Adjusted hero-content for bottom-center alignment */}
        <div className="hero-content text-white w-full absolute bottom-0 text-center pb-10">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-bold text-shadow-lg">Getting a Mortgage doesn&apos;t have to be complicated</h1>
            {/* <button className="btn btn-primary">Free Consultation</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
