import {request} from '@/utils/request';
import {RequestResponse} from '@/services/serviceTypes';
import {setToken} from '@/utils/index';

export const asyncSignIn = async (account: string, password: string) => {
  try {
    const res = await request<
      RequestResponse<{
        token: string;
      }>
    >('/users/login', {
      method: 'POST',
      data: {
        account,
        password,
      },
    });

    if (res.success && res.data) {
      await setToken(res.data.token);
      return true;
    }

    return {
      error: true,
      msg: res.errMsg,
    };
  } catch (err) {
    console.error(err);
    return {
      error: true,
      msg: err,
    };
  }
};

export const asyncCheckEmail = async (email: string) => {
  try {
    const res = await request<
      RequestResponse<{
        valid: boolean;
      }>
    >('/users/infos/check', {
      data: {
        account: email,
      },
    });

    if (res.success && res.data) {
      return res.data.valid;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const asyncSendVerifyCodeByEmail = async (email: string) => {
  try {
    const res = await request<
      RequestResponse<{
        message: string;
      }>
    >('/users/codes/register', {
      method: 'POST',
      data: {
        account: email,
      },
    });

    if (res.success && res.data?.message) {
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

interface RegisterParams {
  account: string;
  nickname?: string;
  verifyCode: string;
  password: string;
}
export const asyncRegisterByEmail = async (params: RegisterParams) => {
  try {
    const res = await request<
      RequestResponse<{
        token: string;
      }>
    >('/users/register', {
      method: 'POST',
      data: params,
    });

    if (res.success && res.data?.token) {
      await setToken(res.data.token);
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
