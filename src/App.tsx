/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import FaqSection from './components/FaqSection';
import PrivacyNotice from './components/PrivacyNotice';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#171717]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <ServicesSection />

        {/* Portfolio & Before/After Interactive Comparison */}
        <PortfolioSection />

        {/* Transparent Pricing Section */}
        <PricingSection />

        {/* How It Works (4 Steps) */}
        <HowItWorks />

        {/* Why Choose RADIVO (Brand Values & Trust) */}
        <WhyChooseUs />

        {/* FAQ Section (Accordion) */}
        <FaqSection />

        {/* Privacy, Ethics, and Data Handling */}
        <PrivacyNotice />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
