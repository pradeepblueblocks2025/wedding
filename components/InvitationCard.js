'use client';
import { motion } from 'framer-motion';

export default function InvitationCard() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/wedding.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Dark Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* 🎀 Invitation Card Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl w-full bg-black/60 shadow-2xl rounded-3xl p-8 text-center border border-white/10"
        >
          <p className="text-xl text-white font-arabic mb-1">السلام علیکم</p>
          <p className="text-sm italic text-white/80 mb-4">
            In the name of Allah, The most gracious and the most merciful
          </p>

          <h2 className="text-lg font-semibold text-white mb-1">We</h2>
          <p className="text-white font-bold text-lg">
            Mr. Saidu Muhammed & Mrs. Jasmin Saidu Muhammed
          </p>
          <p className="text-white text-sm">
            Malayath (H), P.O Chakkarapadam, Perinjanam
          </p>
          <p className="text-white text-sm mb-4">Ph: 8592856928</p>

          <p className="text-white mt-2">
            Cordially invite your esteemed presence with family on the auspicious occasion of the marriage of our beloved son
          </p>

          <h1 className="text-3xl font-extrabold text-white my-3 tracking-wide">
            Mohammed Sajjad
          </h1>

          <div className="space-y-1 text-white text-sm mb-4">
            <p>Grand S/o Mr. (Late) Abdullakkutty & Safiya Abdullakkutty</p>
            <p>Mr. (Late) Saidu Muhammed Tharupeedikayil (H) & Rukkiya Saidu Mohamed</p>
          </div>

          {/* Optional continuation if you want to include spouse info later */}
        </motion.div>
      </div>
    </div>
  );
}
