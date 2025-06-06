import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const AutoReply = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form data:', Object.fromEntries(new FormData(form.current)));

    emailjs
      .sendForm('service_nvii7l5', 'template_853n7b9', form.current, {
        publicKey: 'mMI_toKiVHyku96VO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input 
          type="text" 
          name="name" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input 
          type="email" 
          name="email" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea 
          name="message" 
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      {/* Use defaultValue instead of value for hidden field */}
      <input 
        type="email" 
        name="to_email" 
        defaultValue="tslit.amit@gmail.com" 
        hidden 
      />
      
      <button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </form>
  );
};