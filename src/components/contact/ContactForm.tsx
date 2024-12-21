import React from 'react';

export default function ContactForm() {
  return (
    <form className="bg-black/30 rounded-lg backdrop-blur-sm p-8">
      <div className="grid gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <select
            id="subject"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          >
            <option value="">Select a reason for contact</option>
            <option value="speaking">Speaking Engagement</option>
            <option value="modeling">Modeling Inquiry</option>
            <option value="press">Press & Media</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-electric-blue text-black py-3 rounded-lg font-medium hover:bg-electric-blue/90 transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}