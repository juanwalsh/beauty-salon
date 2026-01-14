import React from 'react';
import { AESTHETIC_SERVICES } from '../constants';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';
import { useBooking } from '../context/BookingContext';


const Aesthetics: React.FC = () => {
  const { openBooking } = useBooking();


return (
<section id="aesthetics" className="py-24 bg-white relative overflow-hidden">
{/* Decorative background element */}
<div className="absolute top-0 right-0 w-1/3 h-full bg-lumiere-50/50 -z-10 skew-x-12 transform origin-top"></div>


<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
{/* Image Side */}
<div className="lg:w-1/2 relative aspect-square lg:aspect-auto lg:h-[600px] w-full">
<FadeIn className="h-full w-full">
<div className="relative h-full w-full overflow-hidden">
<img
src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1587&auto=format&fit=crop"
alt="Spa Treatment"
className="w-full h-full object-cover"
/>
{/* Badge */}
<div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-4 max-w-[150px] text-center shadow-lg">
<span className="font-serif text-2xl text-lumiere-900 block">100%</span>
<span className="text-[0.5rem] uppercase tracking-widest text-lumiere-500">Natural Products</span>
</div>
</div>
</FadeIn>
</div>


{/* Content Side */}
<div className="lg:w-1/2 space-y-12">
<FadeIn>
<h2 className="font-serif text-4xl md:text-5xl text-lumiere-900 mb-6">
Body & <span className="italic text-lumiere-400">Well-being</span>
</h2>
<p className="font-sans text-lumiere-600 text-sm leading-7 max-w-md">
Exclusive protocols combining advanced technology and manual therapies for visible results from the first session.
</p>
</FadeIn>


<div className="space-y-8">
{AESTHETIC_SERVICES.map((service, idx) => (
<FadeIn key={service.id} delay={idx * 100}>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-serif text-xl text-lumiere-900 group-hover:text-lumiere-400 transition-colors">
{service.title}
</h3>
<span className="font-sans text-xs font-bold text-lumiere-900">{service.price}</span>
</div>
<div className="w-full h-[1px] bg-lumiere-200 group-hover:bg-lumiere-300 transition-colors mb-2 relative overflow-hidden">
<div className="absolute inset-0 bg-lumiere-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
</div>
<div className="flex justify-between items-center">
<p className="font-sans text-xs text-lumiere-500 font-light max-w-[80%]">
{service.description}
</p>
<span className="text-[0.6rem] uppercase tracking-wider text-lumiere-300 border border-lumiere-200 px-2 py-1 rounded-full">
{service.duration}
</span>
</div>
</div>
</FadeIn>
))}
</div>


<FadeIn delay={400} className="pt-4">
<Button onClick={openBooking}>Schedule Assessment</Button>
</FadeIn>
</div>


</div>
</div>
</section>
);
};


export default Aesthetics;