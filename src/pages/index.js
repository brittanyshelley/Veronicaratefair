import { Montserrat } from "next/font/google";
import React from 'react';
import Head from 'next/head';
import Testimonials from '../components/Testimonials'; // Ensure you have this component
import Testimonials2 from '../components/Testimonials2';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import ImageContext from '../components/ImageContext';
import AboutMe from '../components/AboutMe';
import Blogs from '../components/Blogs';
import LogoClouds from '../components/LogoClouds';
import ServicesSection5 from "@/components/ServicesSection5";
import MortgageAffordabilityCalculator from "@/components/MortgageAffordabilityCalculator";
import MortgageCalculator from "@/components/MortgageCalculator";
import MortgageCalculator1 from "@/components/MortgageCalculator1";
import MortgageApplicationForm from "@/components/MortgageApplicationForm";




const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-base-200">
      <Head>
        <title>Veronica</title>
        <meta name="description" content="Find the best mortgage rates and services" />
      </Head>

      <HeroSection />
      <AboutMe />
      <LogoClouds />
      <ServicesSection5 />
      <MortgageAffordabilityCalculator />
      <MortgageCalculator />
      <MortgageCalculator1 />
      <MortgageApplicationForm />
      <ImageContext />
      <Blogs />
      <Testimonials />
      <Testimonials2 />
      <ContactForm />

    </main>
  );
}
