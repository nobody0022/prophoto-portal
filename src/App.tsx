import React, { useState } from 'react';
import {
  IoImagesOutline,
  IoSettingsOutline,
  IoStorefrontOutline,
  IoCalendarOutline,
  IoFolderOpenOutline,
} from 'react-icons/io5';
import './index.css';

interface ToolItem {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const tools: ToolItem[] = [
  {
    title: 'Galleries',
    description:
      'Browse and share active photo galleries with clients. View, download, and manage published album collections.',
    url: 'https://www.pro-photo-studio.net/galleries',
    icon: <IoImagesOutline />,
    gradientFrom: '#a955ff',
    gradientTo: '#ea51ff',
  },
  {
    title: 'Albums',
    description: 'Create and manage clients albums.',
    url: 'https://albums.pro-photo-studio.net/',
    icon: <IoFolderOpenOutline />,
    gradientFrom: '#ffa9c6',
    gradientTo: '#f434e2',
  },
  {
    title: 'Management',
    description:
      'Organize, and manage photo gallery collections. Control visibility, ordering.',
    url: 'https://www.pro-photo-studio.net/admin',
    icon: <IoSettingsOutline />,
    gradientFrom: '#56CCF2',
    gradientTo: '#2F80ED',
  },
  {
    title: 'Products',
    description:
      'Admin dashboard for product catalog and order management. Track inventory, pricing, and customer orders.',
    url: 'https://grooms.pro-photo-studio.net/login',
    icon: <IoStorefrontOutline />,
    gradientFrom: '#FF9966',
    gradientTo: '#FF5E62',
  },
  {
    title: 'Reservations',
    description:
      'Manage team billing, client reservations, and scheduling. Track payments, invoices, and upcoming bookings.',
    url: 'https://team.pro-photo-studio.net/auth',
    icon: <IoCalendarOutline />,
    gradientFrom: '#80FF72',
    gradientTo: '#7EE8FA',
  },
];

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      dir="ltr"
      className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4 py-12 gap-16"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
          Pro
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a955ff] to-[#ea51ff]">
            '
          </span>
          Photo
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Studio Tools & Management
        </p>
      </div>

      {/* Gradient Menu */}
      <ul className="flex flex-wrap justify-center gap-8 list-none p-0">
        {tools.map(({ title, icon, gradientFrom, gradientTo, url, description }, idx) => (
          <li key={title} className="flex flex-col items-center gap-4">
            {/* Pill that expands on hover */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={
                {
                  '--gradient-from': gradientFrom,
                  '--gradient-to': gradientTo,
                } as React.CSSProperties
              }
              className="relative w-[80px] h-[80px] bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[200px] hover:shadow-none group cursor-pointer no-underline"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient fill on hover */}
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
              {/* Blur glow */}
              <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50" />

              {/* Icon → scales to 0 on hover */}
              <span className="relative z-10 transition-all duration-500 group-hover:scale-0">
                <span className="text-3xl text-gray-500">{icon}</span>
              </span>

              {/* Title → scales in on hover */}
              <span className="absolute text-white uppercase tracking-wide text-sm font-semibold transition-all duration-500 scale-0 group-hover:scale-100 delay-150">
                {title}
              </span>
            </a>

            {/* Description */}
            <div className="text-center max-w-[200px]">
              <p
                className="leading-relaxed transition-all duration-300"
                style={{
                  fontSize: hoveredIndex === idx ? '0.85rem' : '0.75rem',
                  color: hoveredIndex === idx ? '#e2e8f0' : '#6b7280',
                }}
              >
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
