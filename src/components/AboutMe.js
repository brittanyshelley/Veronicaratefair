// export default function AboutMe() {
//   return (
//     <div className="container mx-auto bg-base-200 px-4 py-8">
//       <div className="card lg:card-side  shadow-xl"> {/* Removed text-center here for better alignment control within children */}
//         <div className="card-body text-center">
//           <h1 className="card-title text-3xl font-bold text-base-content">Veronica Karup, Mortgage Broker</h1> {/* Adjusted class for emphasis and readability */}
//           <p className="text-base-content">
//             Fully licensed mortgage broker servicing British Columbia & Alberta.
//             As a mortgage broker, I work directly for YOU, not the bank. It is my job to negotiate on behalf of my clients to obtain the best solution for your specific situation.
//             When the banks say NO, I say yes. I have exclusive access to several lenders in the mortgage space, including alternative lending, and will find the best solution for you.
//             I specialize in all transactions, including purchases, refinancing for debt consolidation, lower monthly payments, as well as renewals/transfers.
//           </p>
//           <p className="mb-4 text-base-content">Click below to schedule a quick 15-minute appointment with me directly!</p> {/* Separated call to action for better focus */}
//           <div className="card-actions justify-center">
//             <button className="btn btn-primary">Free Consultation</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/components/AboutMe.js

import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="bg-base-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/john-fornander-y3_AHHrxUBY-unsplash.jpg" // Update with the path to your photo
            alt="Your Name"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-base-content mb-4">
            Hello, I&apos;m [Your Name], a dedicated mortgage broker with over [X] years of experience in the industry. My mission is to help clients navigate the complex world of mortgages with ease and confidence. I pride myself on offering personalized service and expert advice to find the best mortgage solutions tailored to your unique needs.
          </p>
          <p className="text-lg text-base-content mb-4">
            Whether you&apos;re a first-time homebuyer, looking to refinance, or seeking investment properties, I&apos;m here to guide you through every step of the process. My extensive network of lenders and deep understanding of the mortgage market ensures that you get the most competitive rates and terms available.
          </p>
          <p className="text-lg text-base-content">
            Outside of work, I enjoy [Your Hobbies/Interests]. I believe in building lasting relationships with my clients and strive to be a trusted advisor you can count on for all your mortgage needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
