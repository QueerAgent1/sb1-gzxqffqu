import React from 'react';
import { contactReasons } from '../../utils/contact';
import ContactReason from './ContactReason';

export default function ContactReasons() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {contactReasons.map((reason) => (
        <ContactReason key={reason.title} {...reason} />
      ))}
    </div>
  );
}