import { Montserrat } from "next/font/google";
import React from 'react';
import Head from 'next/head';
import Testimonials from '../components/Testimonials'; // Ensure you have this component
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import AboutMe from '../components/AboutMe';
import LogoClouds from '../components/LogoClouds';
import ServicesSection5 from "@/components/ServicesSection5";



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
      <Testimonials />
      <ContactForm />

    </main>
  );
}
