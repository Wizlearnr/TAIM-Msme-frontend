"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, ThumbsUp, ThumbsDown, User, Bot, MessageCircle, Languages, Sparkles, ArrowRight, Bell, UserCircle } from 'lucide-react';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/navigation';

type Message = {
    id: number;
    type: 'user' | 'bot';
    content: string;
    options?: string[];
    field?: string;
    isCompletion?: boolean;
    };

const MSMEChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [language, setLanguage] = useState('English');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatFlow = [
    {
      id: 'intro',
      message: "Hello! I'm MSME Scheme Sahayak, your intelligent assistant for Telangana Government schemes. To curate the most relevant opportunities for your business, I'll need to understand your venture better. Let's begin with your business category.",
      options: ['Manufacturing', 'Trading', 'Services', 'Retail Store', 'Agriculture', 'Technology'],
      field: 'businessType'
    },
    {
      id: 'turnover',
      message: "Excellent choice! Now, could you share your estimated annual turnover? This helps me identify schemes with appropriate funding ranges.",
      options: ['Less than ₹50 lakhs', '₹50 lakhs - ₹5 crores', '₹5 crores - ₹25 crores', '₹25 crores - ₹100 crores', 'Above ₹100 crores'],
      field: 'annualTurnover'
    },
    {
      id: 'location',
      message: "Perfect! Location-specific benefits can significantly impact your eligibility. Which district houses your primary business operations?",
      options: ['Hyderabad', 'Warangal', 'Karimnagar', 'Nalgonda', 'Khammam', 'Nizamabad', 'Mahbubnagar', 'Rangareddy', 'Other District'],
      field: 'district'
    },
    {
      id: 'employees',
      message: "Almost there! Your workforce size determines several employment-linked incentives. How many team members are part of your organization?",
      options: ['1-10 employees', '11-50 employees', '51-100 employees', '101-250 employees', '250+ employees'],
      field: 'employeeCount'
    },
    {
      id: 'completion',
      message: "Fantastic! I now have a comprehensive understanding of your business profile. Let me analyze and curate a personalized list of government schemes that align perfectly with your requirements.",
      isCompletion: true
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      addBotMessage(chatFlow[0]);
    }, 1200);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFindSchemes = () => {
    router.push('/recommendedSchemes');
  }

  const router = useRouter();

  const addBotMessage = (stepData: any) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        content: stepData.message,
        options: stepData.options,
        field: stepData.field,
        isCompletion: stepData.isCompletion
      }]);
      setIsTyping(false);
    }, 2000);
  };

  const handleOptionClick = (option:any, field:any) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      content: option
    }]);

    setSelectedOptions(prev => ({ ...prev, [field]: option }));

    if (currentStep < chatFlow.length - 1) {
      setTimeout(() => {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        addBotMessage(chatFlow[nextStep]);
      }, 1200);
    }
  };

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;
    
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      content: currentInput
    }]);
    setCurrentInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        content: "Thank you for reaching out! I've noted your query and will provide you with tailored recommendations shortly. Our intelligent system is processing your requirements."
      }]);
    }, 1500);
  };

  const handleFeedback = (type:any) => {
    console.log(`Feedback: ${type}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Chat Container */}
      <div className="max-w-7xl mx-auto h-[calc(100vh-180px)] flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 px-8 py-8 pb-32 overflow-y-auto space-y-8">
          {messages.map((message, index) => (
            <div
              key={`${message.id}`}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} group`}
              style={{ 
                animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`
              }}
            >
              <div className={`relative max-w-2xl ${message.type === 'user' ? 'ml-12' : 'mr-12'}`}>
                {/* Message Bubble */}
                <div className={`relative px-6 py-4 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-3xl rounded-br-lg shadow-lg border border-blue-400/30'
                    : 'bg-gray-50 text-gray-800 rounded-3xl rounded-bl-lg shadow-sm border border-gray-200'
                }`}>
                  
                  {/* Bot Avatar */}
                  {message.type === 'bot' && (
                    <div className="absolute -left-6 top-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                  )}

                  {/* User Avatar */}
                  {message.type === 'user' && (
                    <div className="absolute -right-6 top-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}

                  {/* Message Content */}
                  <div className={`${message.type === 'bot' ? 'ml-6' : 'mr-6'}`}>
                    <p className={`leading-relaxed ${
                      message.type === 'user' 
                        ? 'text-white/96 font-medium' 
                        : 'text-gray-700 font-medium'
                    }`}>
                      {message.content}
                    </p>
                    
                    {/* Options */}
                    {message.options && (
                      <div className="mt-6 space-y-3">
                        {message.options.map((option, optIndex) => (
                          <button
                            key={optIndex}
                            onClick={() => handleOptionClick(option, message.field)}
                            className="w-full group/btn text-left p-4 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-700 group-hover/btn:text-gray-900 transition-colors duration-200">
                                {option}
                              </span>
                              <ArrowRight className="w-4 h-4 text-blue-500 opacity-0 group-hover/btn:opacity-100 transform translate-x-1 group-hover/btn:translate-x-0 transition-all duration-200" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Feedback buttons */}
                    {message.type === 'bot' && !message.options && (
                      <div className="flex space-x-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => handleFeedback('positive')}
                          className="p-2 hover:bg-green-50 rounded-xl transition-all duration-200 group/like"
                        >
                          <ThumbsUp className="w-4 h-4 text-gray-400 group-hover/like:text-green-600 transition-colors duration-200" />
                        </button>
                        <button
                          onClick={() => handleFeedback('negative')}
                          className="p-2 hover:bg-red-50 rounded-xl transition-all duration-200 group/dislike"
                        >
                          <ThumbsDown className="w-4 h-4 text-gray-400 group-hover/dislike:text-red-600 transition-colors duration-200" />
                        </button>
                      </div>
                    )}

                    {/* Completion CTA */}
                    {message.isCompletion && (
                      <button className="mt-6 w-full bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-600 hover:via-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl group/cta border border-white/20">
                        <div className="flex items-center justify-center space-x-2">
                          <Sparkles className="w-5 h-5 group-hover/cta:animate-spin" />
                          <span>Discover Perfect Schemes</span>
                          <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-200" />
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start animate-[fadeInUp_0.4s_ease-out]">
              <div className="relative mr-12">
                <div className="absolute -left-6 top-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse border border-white/20">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="bg-gray-50 px-6 py-4 rounded-3xl rounded-bl-lg shadow-sm border border-gray-200 ml-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 font-medium">Analyzing</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Enhanced Input Area */}
        <div className="absolute bottom-20 left-0 right-0 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-md border border-gray-300 p-2">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about MSME schemes..."
                  className="flex-1 px-6 py-4 bg-transparent border-0 focus:outline-none text-gray-700 placeholder-gray-400 font-medium"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!currentInput.trim()}
                  className="bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-500 hover:to-blue-600 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:shadow-none group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


        <div className='flex items-center justify-center m-4'>
            <button onClick={handleFindSchemes} className="mt-6 max-w-3xl bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-600 hover:via-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl group/cta border border-white/20">
            <div className="flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5 group-hover/cta:animate-spin" />
                <span>Find Schemes</span>
                <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-200" />
            </div>
            </button>
        </div>
                    

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600 font-medium">
            © 2023 MSME Scheme Sahayak • Powered by AI • Government of Telangana
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MSMEChatInterface;