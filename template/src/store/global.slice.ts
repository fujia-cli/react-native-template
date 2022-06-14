import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './index';
import {
  asyncGetUserInfo,
  asyncUpdateProfile,
  UpdateProfileParams,
  UpdateUserPwdParams,
  asyncUpdateUserPwd,
  asyncUpdateUserNickname,
} from '@/services/index';
import {ErrorResponse} from '@/services/serviceTypes';

export interface UserProfile {
  _id: string;
  nickname: string;
  avatar: string;
  phoneNumber?: string;
  email?: string;
  baseInfo: {
    name: string; // 真实姓名，实名验证
    birthday: string;
    gender: 'male' | 'female' | 'private';
  };
  workInfo?: {
    signature: string;
    github: string;
    profession: string;
    intro: string;
    site: string;
    workYears: Number;
  };
  authInfo?: {
    // 第三方登录
    alipay: string;
    wechat: string;
    weibo: string;
    github: string;
    gitlab: string;
  };
  member?: {
    roles: 'regular' | 'vip' | 'vvip';
    expireTime: string;
    purchaseTime: string;
  };
}

export interface FormatUserProfile extends Omit<UserProfile, 'baseInfo'> {
  baseInfo: {
    name: string; // 真实姓名，实名验证
    birthday: string;
    gender: '男' | '女' | '保密';
  };
}

export interface GlobalState {
  userStatus: 'online' | 'offline';
  fetchStatus: 'idle' | 'loading' | 'success' | 'error';
  userProfile: FormatUserProfile | null;
}

const initialState: GlobalState = {
  fetchStatus: 'idle',
  userStatus: 'offline',
  userProfile: null,
};

// const getProfile = createAction<UserProfile | null>('global/getProfile');

// fetch user profile
export const fetchUserProfile = createAsyncThunk('global/fetchUserProfile', async () => {
  const res = await asyncGetUserInfo();

  return res;
});

// update user profile
export const updateUserProfile = createAsyncThunk<FormatUserProfile | null, UpdateProfileParams>(
  'global/updateUserProfile',
  async (params: UpdateProfileParams) => {
    const res = await asyncUpdateProfile(params);

    return res;
  },
);

// update password
export const updateUserPwd = createAsyncThunk<boolean | undefined, UpdateUserPwdParams>(
  'global/updateUserPwd',
  async (params: UpdateUserPwdParams) => {
    const res = await asyncUpdateUserPwd(params);

    return res;
  },
);

// update user profile
export const updateUserNickname = createAsyncThunk<FormatUserProfile | null, string>(
  'global/updateUserNickname',
  async (nickname: string) => {
    const res = await asyncUpdateUserNickname(nickname);

    return res;
  },
);

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    logout: state => {
      state.userProfile = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(updateUserProfile.pending, state => {
        state.fetchStatus = 'loading';
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.fetchStatus = 'success';
        state.userProfile = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.fetchStatus = 'error';
        console.error(action.error);
      })
      .addCase(updateUserNickname.pending, state => {
        state.fetchStatus = 'loading';
      })
      .addCase(updateUserNickname.fulfilled, (state, action) => {
        state.fetchStatus = 'success';
        if (action.payload) {
          state.userProfile = action.payload;
        }
      })
      .addCase(updateUserNickname.rejected, (state, action) => {
        state.fetchStatus = 'error';
        console.error(action.error);
      })
      .addCase(updateUserPwd.pending, state => {
        state.fetchStatus = 'loading';
      })
      .addCase(updateUserPwd.fulfilled, state => {
        state.fetchStatus = 'success';
      })
      .addCase(updateUserPwd.rejected, (state, action) => {
        state.fetchStatus = 'error';
        console.error(action.error);
      });
  },
});

export const {logout} = globalSlice.actions;

export const selectUserStatus = (state: RootState) => state.global.userStatus;

export const selectIsLogin = (state: RootState) => state.global.userProfile?._id !== undefined;

export const selectUserProfile = (state: RootState) => state.global.userProfile;

export default globalSlice.reducer;
