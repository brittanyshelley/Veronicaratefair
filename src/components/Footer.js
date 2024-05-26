import React from 'react';
import ThemeSelector from './ThemeSelectors';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Dominion Lending Centers. All rights reserved.</p>
          <p>Follow us on social media.</p>
        </div>

        <ThemeSelector />

        <div className="text-center md:text-right">
          <p>Contact Us:</p>
          <p>Email: Veronica@ratefair.ca</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}