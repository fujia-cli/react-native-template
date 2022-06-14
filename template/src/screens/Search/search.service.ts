import {request} from '@/utils/request';
import {RequestResponse} from '@/services/serviceTypes';

import type {ArticleItem} from '../Article/article.service';

type SearchResponse = RequestResponse<{
  articles?: {
    data: ArticleItem[];
    total: number;
  };
  books?: {
    data: any[];
    total: number;
  };
}>;

export interface SearchResItem<D = any> {
  title: string;
  data: D[];
}

export const asyncSearch = async (keywords: string) => {
  try {
    if (!keywords) {
      return [];
    }
    const res = await request<SearchResponse>('/users/search', {
      data: {keywords},
    });

    const resData = res.data;

    if (res.success && resData) {
      const formatRes: SearchResItem<ArticleItem>[] = [];

      if (resData.articles) {
        formatRes.push({
          title: '文章',
          data: resData.articles.data,
        });
      } else if (resData.books) {
        formatRes.push({
          title: '小书',
          data: resData.books.data,
        });
      }

      return formatRes;
    }

    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
