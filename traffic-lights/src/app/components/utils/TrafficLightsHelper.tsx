type LightState = 'G' | 'O' | 'R';

export const getLightState = (time: number): LightState => {
    const cycleTime = time % 11;
    if (cycleTime < 5) return 'G'; 
    if (cycleTime === 5) return 'O';
    return 'R';
};