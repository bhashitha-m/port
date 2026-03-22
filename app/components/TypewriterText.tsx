"use client";
import Typewriter from 'typewriter-effect';

export default function TypewriterText() {
  return (
    <div className="min-h-[80px] flex items-center justify-center">
      {/* මෙහි text-[#ff3b3b] වෙනුවට text-orange-500 සහ drop-shadow එකේ rgba අගයන් වෙනස් කර ඇත */}
      <h2 className="text-orange-500 text-3xl md:text-5xl font-black italic uppercase drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">
        <Typewriter
          options={{
            strings: [
              'Junior Software Engineer',
              'Full Stack Developer',
              'UI / UX Designer',
              'Creative Solution Seeker',
              'Problem Solver',
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </h2>
    </div>
  );
}