import React from 'react';
import { Reading } from '@/data/readings';

interface ReadingListProps {
  readings: Reading[];
  showAll?: boolean;
}

export default function ReadingList({ readings, showAll = false }: ReadingListProps) {
  return (
    <>
      {readings.map((reading, index) => (
        <div key={index} className="border border-black border-t-0 p-2">
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
              <a 
                href={reading.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {reading.title}
              </a>
              {reading.description && (
                <div className="text-gray-600 mt-1 text-2xs">
                  {reading.description}
                </div>
              )}
            </div>
            <span className="text-gray-500 text-2xs whitespace-nowrap">
              {reading.date}
            </span>
          </div>
        </div>
      ))}
      {!showAll && readings.length > 0 && (
        <div className="border border-black border-t-0 p-2 text-center">
          <a href="/reading" className="hover:text-blue-600 transition-colors duration-200">
            view all →
          </a>
        </div>
      )}
    </>
  );
}