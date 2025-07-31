// Em src/app/components/InfoBar.tsx
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function InfoBar() {
    return (
        <div className="w-full bg-[#FAF7F0] p-6 flex justify-around items-center flex-wrap gap-4">
            
            <div className="flex items-center gap-2">
                <CheckCircle2 size={20} color="#000" />
                <span className="font-semibold text-black text-sm sm:text-base">100% Plant-based</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 size={20} color="#000" />
                <span className="font-semibold text-black text-sm sm:text-base">Real Fruits, Nuts, & Superfoods</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 size={20} color="#000" />
                <span className="font-semibold text-black text-sm sm:text-base">No Preservatives or Added Sugar</span>
            </div>
        </div>
    );
}