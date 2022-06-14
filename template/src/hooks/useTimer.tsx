import {useState, useEffect, useCallback, useRef} from 'react';

interface TimeOptions {
  start: number;
  stop: number;
  interval?: number;
  step?: number;
  mode?: 'forward' | 'backward';
}

export const useTimer = ({start, stop, interval = 1000, step = 1, mode = 'forward'}: TimeOptions) => {
  const [time, setTime] = useState<number>(start);
  const [timerStatus, setTimerStatus] = useState<'idle' | 'timing' | 'done'>('idle');
  const timerRef = useRef<NodeJS.Timer | null>(null);

  const startTiming = useCallback(() => {
    setTimerStatus('timing');

    timerRef.current = setInterval(() => {
      if (mode === 'forward') {
        setTime(preState => {
          if (preState >= stop) {
            timerRef.current && clearInterval(timerRef.current);
            setTimerStatus('done');
            return start;
          }
          return preState + step;
        });
      } else {
        setTime(preState => {
          if (preState <= stop) {
            timerRef.current && clearInterval(timerRef.current);
            setTimerStatus('done');
            return start;
          }
          return preState - step;
        });
      }
    }, interval);
  }, [mode, start, step, stop, interval]);

  useEffect(() => {
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, []);

  return {time, startTiming, timerStatus};
};
