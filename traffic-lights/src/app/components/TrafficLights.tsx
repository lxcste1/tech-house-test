"use client";
import React, { useEffect, useState } from 'react';

import { getLightState } from './utils/TrafficLightsHelper';

const TrafficLights = () => {
    const [road, setRoad] = useState<string>('CCC.G...R...');
    const [time, setTime] = useState<number>(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        moveCars();
      }, 1000);
  
      return () => clearInterval(interval);
    }, [road, time]);
  
    const moveCars = (): void => {
        const newRoad = road.split('');
        const lightState1 = getLightState(time);
        const lightState2 = getLightState(time);
      
        for (let i = newRoad.length - 1; i >= 0; i--) {
          if (newRoad[i] === 'C') {
            if (i + 1 < newRoad.length) {
              const nextCell = newRoad[i + 1];
      
              if (i === 3 && (lightState1 === 'R' || (lightState1 === 'O' && nextCell !== '.'))) {
                continue; 
              }
      
              if (i === 7 && (lightState2 === 'R' || (lightState2 === 'O' && nextCell !== '.'))) {
                continue; 
              }
      
              if (nextCell === '.' || nextCell === 'G') {
                newRoad[i] = '.';
                newRoad[i + 1] = 'C';
              }
            }
          }
        }
      
        newRoad[4] = lightState1;
        newRoad[8] = lightState2;
      
        setRoad(newRoad.join(''));
      };
  
    return (
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Traffic lights</h1>
        <h2 className="text-lg">Estado del semáforo: {getLightState(time)}</h2>
        <div className="flex justify-around mt-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getLightState(time) === 'G' ? 'bg-green-500' : 'bg-gray-500'}`}>G</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getLightState(time) === 'O' ? 'bg-orange-500' : 'bg-gray-500'}`}>O</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getLightState(time) === 'R' ? 'bg-red-500' : 'bg-gray-500'}`}>R</div>
        </div>
        <div className="text-2xl mt-4 font-mono">
          {road.split('').map((char, index) => (
            <span key={index} className={`inline-block w-8 text-center ${char === 'C' ? 'text-blue-500' : ''}`}>
              {char}
            </span>
          ))}
        </div>
      </div>
    );
  };
  

export default TrafficLights;