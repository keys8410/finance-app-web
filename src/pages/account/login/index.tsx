import React from 'react';
import FormLogin from './form-login';
import { LoginCardImage, LoginContainer } from './styles';

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row">
      <LoginContainer>
        <div className="p-4">
          <div
            style={{ width: '100%', textAlign: 'center', height: 145 }}
          ></div>
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <FormLogin />
          </div>
        </div>
        <LoginCardImage>
          <div></div>
        </LoginCardImage>
      </LoginContainer>
    </div>
  );
};

export default Login;
