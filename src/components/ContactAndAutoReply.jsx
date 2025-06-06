import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactAndAutoReply = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formElement = form.current;
    const formData = new FormData(formElement);
    const userEmail = formData.get('user_email'); // Get user’s email
    
    // Dynamically set the to_email field for auto-reply to user’s email
    const toEmailInput = formElement.querySelector('input[name="to_email"]');
    toEmailInput.value = userEmail; // Set to_email to user_email
    
    console.log('Form data:', Object.fromEntries(formData));

    // Send Contact Us email
    emailjs
      .sendForm('service_nvii7l5', 'template_jide4pg', form.current, {
        publicKey: 'mMI_toKiVHyku96VO',
      })
      .then(
        () => {
          console.log('Contact Us Email: SUCCESS!');
          
          // Send Auto-Reply email to the user’s email
          emailjs
            .sendForm('service_nvii7l5', 'template_853n7b9', form.current, {
              publicKey: 'mMI_toKiVHyku96VO',
            })
            .then(
              () => {
                console.log('Auto-Reply Email: SUCCESS!');
                alert('Thank you! We’ve received your message and sent a confirmation to your email.');
              },
              (error) => {
                console.log('Auto-Reply Email: FAILED...', error);
                alert('Message sent, but auto-reply failed. We’ll get back to you soon!');
              }
            );
        },
        (error) => {
          console.log('Contact Us Email: FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="user_email"
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

        {/* Hidden field for auto-reply recipient, set to user_email */}
        <input
          type="email"
          name="to_email"
          defaultValue=""
          hidden
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  );
};