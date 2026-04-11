/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Linkedin } from "lucide-react";
import as1 from "./1as.png";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-brand-dark overflow-y-auto overflow-x-hidden">
      {/* Main Section - 1as.png */}
      <section className="relative min-h-screen w-full flex flex-col items-center bg-brand-dark">
        <div className="w-full relative">
          <img 
            src={as1} 
            alt="The Blau House" 
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
          
          {/* Responsive Button Container */}
          <motion.div 
            {...fadeIn}
            className="absolute top-[81.8%] left-[14.5%] sm:left-[16%] flex flex-col gap-1.5 sm:gap-2"
          >
            <button 
              className="
                text-white rounded-full tracking-tight shadow-md transition-all
                /* CELULAR (por defecto) */
                bg-black font-[Georgia] font-normal text-[5.5px] leading-none mt-[3px] ml-[-13px] w-[75px] h-[12px] flex items-center justify-center
                /* COMPUTADOR (sm:) */
                sm:bg-[#0a0a0a] sm:font-[Georgia] sm:font-medium sm:text-[16px] sm:mt-[28px] sm:ml-[5px] sm:leading-none sm:w-[220.141px] sm:h-[40px] sm:flex sm:items-center sm:justify-center
                active:scale-95 whitespace-nowrap
              "
              onClick={() => window.open('https://theblauhousees.tiiny.site', '_blank')}
            >
              Request for Invitation
            </button>
          </motion.div>

          {/* Second Button - Under the Lock Icon */}
          <motion.div 
            {...fadeIn}
            className="absolute top-[48.5%] left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <button 
              className="
                rounded-full tracking-tight shadow-md transition-all flex items-center justify-center
                /* CELULAR (por defecto) */
                bg-white text-black font-[Georgia] font-normal text-[5.5px] leading-none mt-[69px] ml-0 w-[75px] h-[12px]
                /* COMPUTADOR (sm:) */
                sm:bg-[#faf6f6] sm:text-black sm:font-[Georgia] sm:font-medium sm:px-6 sm:py-2.5 sm:text-sm sm:leading-normal sm:mt-[300px] sm:ml-0 sm:w-fit sm:h-fit
                active:scale-95 whitespace-nowrap
              "
              onClick={() => window.open('https://theblauhousees.tiiny.site', '_blank')}
            >
              Request for Invitation
            </button>
          </motion.div>

          {/* Responsive Social Icons Container */}
          <div className="absolute bottom-[18px] left-[30px] sm:bottom-[120px] sm:top-auto sm:left-[135px] flex gap-3 sm:gap-8">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/theblauhouse.es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-all hover:scale-110 active:scale-90 drop-shadow-md"
            >
              <Instagram className="w-3 h-3 sm:w-6 sm:h-6" />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/aida-ribal-quintana/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-all hover:scale-110 active:scale-90 drop-shadow-md"
            >
              <Linkedin className="w-3 h-3 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
