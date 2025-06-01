"use client";

import React, { useState, useEffect } from 'react';
import { 
  User, 
  ThumbsUp, 
  ThumbsDown, 
  MessageSquare, 
  ArrowLeft,
  Factory,
  CheckCircle,
  Send,
  Heart
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const MSMEFeedbackPage = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<string>('');
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFeedbackSelect = (type:string) => {
    setSelectedFeedback(type);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleBackToWelcome = () => {
    setIsSubmitted(false);
    setSelectedFeedback('');
    setFeedbackText('');
    router.push('/welcome'); 
  }

  const fadeInUp = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.6s ease-out'
  };

  const staggerDelay = (index: number) => ({
    ...fadeInUp,
    transitionDelay: `${index * 0.2}s`
  });

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex items-center justify-center min-h-[80vh] px-6">
          <div 
            className="bg-white rounded-xl border border-slate-200 p-8 max-w-md w-full text-center shadow-lg"
            style={{
              animation: mounted ? 'bounceIn 0.8s ease-out' : 'none'
            }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Thank You!</h2>
            <p className="text-slate-600 mb-6">
              Your feedback has been submitted successfully. We appreciate your input and will use it to improve our services.
            </p>
            <button 
              onClick={handleBackToWelcome}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Back to Welcome page
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-sm text-slate-500">© 2023 MSME Scheme Sahayak</p>
        </div>

        <style jsx>{`
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[80vh] px-6 py-12">
        <div className="max-w-md w-full">
          {/* Feedback Card */}
          <div 
            className="bg-white rounded-xl border-2 border-blue-200 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={staggerDelay(1)}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div 
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={staggerDelay(1.2)}
              >
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h2 
                className="text-xl font-bold text-slate-800 mb-2"
                style={staggerDelay(1.4)}
              >
                Was this helpful?
              </h2>
              <p 
                className="text-slate-600 text-sm"
                style={staggerDelay(1.6)}
              >
                Let us know your experience with the scheme recommendations.
              </p>
            </div>

            {/* Feedback Buttons */}
            <div 
              className="flex space-x-4 mb-6"
              style={staggerDelay(1.8)}
            >
              <button
                onClick={() => handleFeedbackSelect('yes')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md ${
                  selectedFeedback === 'yes'
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-slate-100 text-slate-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <ThumbsUp className={`w-4 h-4 transition-all duration-300 ${selectedFeedback === 'yes' ? 'scale-110' : ''}`} />
                <span className="font-medium">Yes</span>
              </button>
              
              <button
                onClick={() => handleFeedbackSelect('no')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md ${
                  selectedFeedback === 'no'
                    ? 'bg-red-100 text-red-700 border-2 border-red-300'
                    : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                <ThumbsDown className={`w-4 h-4 transition-all duration-300 ${selectedFeedback === 'no' ? 'scale-110' : ''}`} />
                <span className="font-medium">No</span>
              </button>
            </div>

            {/* Feedback Text Area */}
            <div 
              className="mb-6"
              style={staggerDelay(2)}
            >
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tell us what went wrong or suggest improvements{' '}
                <span className="text-slate-500">(Optional)</span>
              </label>
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Your feedback here..."
                className="bg-white text-gray-900 placeholder-gray-500 w-full p-4 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-400"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!selectedFeedback}
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                selectedFeedback
                  ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 hover:shadow-lg active:scale-95'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }`}
              style={staggerDelay(2.2)}
            >
              <Send className="w-4 h-4" />
              <span>Submit Feedback</span>
            </button>
          </div>

          {/* Additional Info */}
          <div 
            className="text-center mt-6 p-4 bg-white rounded-lg border border-slate-200 transition-all duration-300 hover:shadow-md"
            style={staggerDelay(2.4)}
          >
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-sm">Your feedback helps us serve you better</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div 
        className="text-center py-8 border-t border-slate-200"
        style={staggerDelay(2.6)}
      >
        <p className="text-sm text-slate-500">© 2023 MSME Scheme Sahayak</p>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default MSMEFeedbackPage;