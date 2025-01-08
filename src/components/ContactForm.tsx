'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactForm() {
  const t = useTranslations('ContactPage');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setFormData({ name: '', email: '', message: '' }); // Reset form
      setStatus('success');
      setPopupVisible(true); // Show popup
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  // Automatically hide the popup after 5 seconds
  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        setPopupVisible(false);
      }, 500000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isPopupVisible]);

  const closePopup = () => setPopupVisible(false);

  return (
    <div>
      {/* Form */}
      <form onSubmit={sendMail} className="flex flex-col gap-4">
        {/* Name Input */}
        <div className="flex flex-col">
          <label
            className="font-semibold text-lg text-foreground"
            htmlFor="name"
          >
            {t('name')}
          </label>
          <input
            className="border-4 w-1/2 bg-background2 rounded-md p-4 border-foreground focus:border-accent"
            name="name"
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label
            className="font-semibold text-lg text-foreground"
            htmlFor="email"
          >
            {t('email')}
          </label>
          <input
            className="border-4 w-2/3 bg-background2 rounded-md p-4 border-foreground focus:border-accent"
            name="email"
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Message Input */}
        <div className="flex flex-col">
          <label
            className="font-semibold text-lg text-foreground"
            htmlFor="message"
          >
            {t('message')}
          </label>
          <textarea
            className="border-4 bg-background2 rounded-md p-4 border-foreground focus:border-accent"
            name="message"
            id="message"
            required
            rows={5}
            maxLength={500}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          className={`p-4 text-2xl rounded-md font-bold transition ${
            status === 'sending'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-foreground text-background hover:bg-accent'
          }`}
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? t('submitting') : t('submit')}
        </button>

        {/* Error Message */}
        {status === 'error' && (
          <p className="text-red-600 font-semibold">
            Failed to send the message. Please try again.
          </p>
        )}
      </form>

      {/* Success Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-background2 rounded-md p-6 gap-4 flex flex-col">
            <div className="flex flex-row items-center justify-between gap-4">
              <div className="h-4 w-full bg-gray-300 rounded-md overflow-hidden">
                <div
                  className="h-full bg-accent transition-all"
                  style={{ animation: 'progress 1000s linear forwards' }}
                />
              </div>
              <button
                onClick={closePopup}
                className="flex justify-end text-foreground hover:text-accent transition"
              >
                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-lg text-foreground mb-2">
                Your message has been sent successfully!
              </p>
              <Image
                className="w-64 h-64 object-contain rounded-md"
                src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                alt="Mr. Bean"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      )}

      {/* Loading Bar Animation */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
