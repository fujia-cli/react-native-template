import {request} from '@/utils/request';
import {RequestResponse} from '@/services/serviceTypes';
import {delToken} from '@/utils/index';

export const asyncLogout = async () => {
  try {
    const res = await request<
      RequestResponse<{
        _id: string;
      }>
    >('/users/logout');

    if (res.success && res.data) {
      await delToken();

      return true;
    }

    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const DEFAULT_RECEIVE_EMAIL = 'fujia.site@foxmail.com';
interface FeedbackParams {
  content: string;
  email?: string;
  subject: string;
}
export const asyncFeedback = async (params: FeedbackParams) => {
  try {
    const {content, email = DEFAULT_RECEIVE_EMAIL, subject} = params;

    const res = await request<
      RequestResponse<{
        message: string;
      }>
    >('/users/feedback', {
      method: 'POST',
      data: {
        content: `${content}<div><p>发送邮箱: fujia_site@163.com</p></div>`,
        email,
        subject,
      },
    });

    if (res.success && res.data) {
      return true;
    }

    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};
