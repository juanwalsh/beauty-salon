import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import Button from './ui/Button';

const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking } = useBooking();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hair Styling',
    date: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Custom Date Picker State
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    // Generate next 14 days
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 21; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push(d);
    }
    setAvailableDates(dates);
  }, []);

  if (!isBookingOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.date) newErrors.date = "Please select a date";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset after 3 seconds and close
      setTimeout(() => {
        setIsSubmitted(false);
        closeBooking();
        setFormData({ name: '', phone: '', service: 'Hair Styling', date: '', notes: '' });
        setErrors({});
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleDateSelect = (date: Date) => {
    setFormData({ ...formData, date: date.toISOString() });
    if (errors.date) setErrors({ ...errors, date: '' });
  };

  const scrollDates = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setStartIndex(Math.max(0, startIndex - 3));
    } else {
      setStartIndex(Math.min(availableDates.length - 4, startIndex + 3));
    }
  };

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-lumiere-900/40 backdrop-blur-md transition-opacity"
        onClick={closeBooking}
      />

      {/* Modal Content */}
      <div className="relative bg-lumiere-50 w-full max-w-lg rounded-xl shadow-2xl p-8 animate-[fadeIn_0.3s_ease-out] overflow-hidden">
        <button 
          onClick={closeBooking}
          className="absolute right-5 top-5 text-lumiere-400 hover:text-lumiere-900 transition-colors"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-8">
               <h2 className="font-serif text-3xl md:text-4xl text-lumiere-900 mb-2">Book Appointment</h2>
               <p className="font-sans text-lumiere-500 text-sm tracking-wide">Select your preferred time and service.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest text-lumiere-800 mb-2 font-bold">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.name ? 'border-red-400' : 'border-lumiere-200'} px-4 py-3 text-sm focus:outline-none focus:border-lumiere-400 transition-colors rounded-sm`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest text-lumiere-800 mb-2 font-bold">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.phone ? 'border-red-400' : 'border-lumiere-200'} px-4 py-3 text-sm focus:outline-none focus:border-lumiere-400 transition-colors rounded-sm`}
                    placeholder="(55) 99999-9999"
                  />
                  {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-[0.65rem] uppercase tracking-widest text-lumiere-800 mb-2 font-bold">Service</label>
                <div className="relative">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-lumiere-200 px-4 py-3 text-sm focus:outline-none focus:border-lumiere-400 transition-colors rounded-sm appearance-none cursor-pointer"
                  >
                    <option>Hair Styling</option>
                    <option>Makeup</option>
                    <option>Manicure & Pedicure</option>
                    <option>Facial Treatments</option>
                    <option>Massage</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-lumiere-400">
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>
              
              {/* Custom Date Picker */}
              <div>
                <label className="block text-[0.65rem] uppercase tracking-widest text-lumiere-800 mb-2 font-bold">Preferred Date</label>
                
                <div className="relative">
                   <div className="flex items-center space-x-2 mb-2">
                      <button 
                        type="button" 
                        onClick={() => scrollDates('left')}
                        disabled={startIndex === 0}
                        className="p-1 text-lumiere-400 hover:text-lumiere-900 disabled:opacity-30 transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      
                      <div className="flex-1 grid grid-cols-3 gap-2 overflow-hidden">
                        {availableDates.slice(startIndex, startIndex + 3).map((date, idx) => {
                          const isSelected = formData.date === date.toISOString();
                          return (
                            <div 
                              key={idx}
                              onClick={() => handleDateSelect(date)}
                              className={`
                                cursor-pointer flex flex-col items-center justify-center py-3 rounded-md border transition-all duration-300
                                ${isSelected 
                                  ? 'bg-lumiere-900 text-lumiere-50 border-lumiere-900 transform scale-105 shadow-md' 
                                  : 'bg-white text-lumiere-600 border-lumiere-200 hover:border-lumiere-400 hover:bg-lumiere-50'
                                }
                              `}
                            >
                              <span className="text-[0.6rem] uppercase tracking-wider mb-1">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                              <span className="font-serif text-lg leading-none">{date.getDate()}</span>
                            </div>
                          );
                        })}
                      </div>

                      <button 
                         type="button" 
                         onClick={() => scrollDates('right')}
                         disabled={startIndex >= availableDates.length - 3}
                         className="p-1 text-lumiere-400 hover:text-lumiere-900 disabled:opacity-30 transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                   </div>
                   {formData.date && (
                     <div className="text-center text-xs text-lumiere-500 font-serif italic mt-2 animate-pulse">
                        Selected: {formatDateDisplay(formData.date)}
                     </div>
                   )}
                   {errors.date && <span className="text-red-400 text-xs mt-1 block text-center">{errors.date}</span>}
                </div>
              </div>

              <div className="pt-6">
                <Button type="submit" variant="primary" className="w-full flex justify-center py-4 text-xs tracking-[0.2em]">
                  CONFIRM BOOKING
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-12 animate-[fadeIn_0.5s_ease-out]">
            <div className="w-16 h-16 bg-lumiere-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-lumiere-900" size={32} />
            </div>
            <h3 className="font-serif text-3xl text-lumiere-900 mb-4">Request Sent</h3>
            <p className="text-lumiere-600 mb-8 max-w-xs mx-auto text-sm leading-relaxed">
              Thank you, <span className="font-bold text-lumiere-800">{formData.name}</span>. <br/>
              We have received your request for <br/>
              <span className="italic text-lumiere-800">{formData.service}</span> on <span className="italic text-lumiere-800">{new Date(formData.date).toLocaleDateString()}</span>.
            </p>
            <Button onClick={closeBooking} variant="primary">Close</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;