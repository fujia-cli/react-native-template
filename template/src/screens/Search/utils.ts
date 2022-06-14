import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import {reduxStorage} from '@/utils/storage';

export interface History {
  id: string;
  value: string;
}

export const HISTORY_KEY = 'search_histories';
export const MAX_HISTORIES = 6;

export const genHistoryItem = (value: string) => {
  return {
    id: nanoid(8),
    value,
  };
};

export const storeHistory = async (histories: History[]) => {
  try {
    await reduxStorage.setItem(HISTORY_KEY, JSON.stringify(histories));
  } catch (err) {
    console.error(err);
  }
};

export const getHistory = async (count?: number) => {
  try {
    const historiesString = await reduxStorage.getItem(HISTORY_KEY);

    if (!historiesString) {
      return [];
    }

    const histories = JSON.parse(historiesString) as History[];

    if (count && count > 0) {
      return histories.slice(0, count);
    }

    return histories;
  } catch (err) {
    console.error(err);
  }
};
