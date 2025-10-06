'use client'
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  phone?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="min-h-screen text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
        }`}>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s <span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text">work together</span>
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-800 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
          <p className="text-gray-400 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
            Whether you need a website, mobile app, or a striking design, I&apos;m ready to turn your ideas into reality. 
            Let&apos;s collaborate and create something exceptional together. I look forward to connecting with you!
          </p>
        </div>

        {/* Main Content */}
        <div className={`grid lg:grid-cols-3 gap-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* First Row - Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-6 py-4 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500/50 hover:border-gray-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-6 py-4 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500/50 hover:border-gray-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Second Row - Subject and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full px-6 py-4 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.subject 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500/50 hover:border-gray-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.subject}
                    </p>
                  )}
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 hover:border-gray-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here."
                  rows={6}
                  className={`w-full px-6 py-4 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500/50 hover:border-gray-500'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-600/50 disabled:transform-none disabled:shadow-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-600/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="text-green-300">Message sent successfully! I&apos;ll get back to you soon.</span> {/* ✅ FIXED apostrophe */}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-600/20 border border-red-500/50 rounded-lg flex items-center gap-3">
                  <AlertCircle size={20} className="text-red-400" />
                  <span className="text-red-300">Something went wrong. Please try again later.</span>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <a 
                  href="tel:+94717646067" 
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  (+94) 71 764 6067
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a 
                  href="mailto:dulanjanassd@gmail.com" 
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 break-all"
                >
                  Dulanjanassd@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Address</h3>
                <p className="text-gray-300 leading-relaxed">
                  8/A,
                  Ayurwedha Road,
                  Agarawala, Aparakka.
                </p>
              </div>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
