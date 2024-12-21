import React from 'react';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactReasons from './ContactReasons';

export default function Contact() {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactReasons />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}