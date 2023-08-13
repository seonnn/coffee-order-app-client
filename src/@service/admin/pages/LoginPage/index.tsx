import React from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { api_ } from 'src/@api/axiosInstance';
import { tokenSelector } from 'src/@recoil/atom/auth.atom';

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const setToken = useSetRecoilState(tokenSelector);

  const login = async (loginData: LoginFormValues) => {
    try {
      const {
        data: { token },
      } = await api_.post('/auth/login/username-password', loginData);

      if (token) setToken(token);
      return window.alert('로그인 성공!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401)
          window.alert('아이디 또는 비밀번호를 잘못 입력했습니다.');
      }

      throw new Error(`로그인 실패: ${JSON.stringify(error)}`);
    }
  };

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    await login(data);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center items-center w-[360px] px-5 border min-h-screen">
        <h1 className="font-bold text-xl mb-3">로그인</h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col gap-1 mb-3">
            <label htmlFor="username" className="text-sm">
              아이디
            </label>
            <input
              className="w-full border border-gray-200 rounded py-2 px-3"
              id="username"
              type="text"
              {...register('username', { required: true })}
            />
          </div>
          <div className="w-full flex flex-col gap-1 mb-5">
            <label htmlFor="password" className="text-sm">
              비밀번호
            </label>
            <input
              className="w-full border border-gray-200 rounded py-2 px-3"
              id="password"
              type="password"
              {...register('password', { required: true })}
            />
          </div>
          <button
            type="submit"
            className="w-full border bg-gray-200 rounded py-2 px-3"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
