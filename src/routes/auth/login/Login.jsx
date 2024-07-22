import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from "../../../api";
import TelegramLoginButton from 'telegram-login-button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Title, Text } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('/auth/Login', values);
      console.log(response.data);
      toast.success("Login successful!");  // Muvaffaqiyatli login haqida bildirishnoma
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please check your credentials.");  // Xatolik haqida bildirishnoma
    } finally {
      setLoading(false);
    }
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    toast.error("Please fill out all required fields correctly.");  // Formda xatolik haqida bildirishnoma
  };

  return (
    <>
      <ToastContainer />
      <Form
        layout='vertical'
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title className='text-center'>Login</Title>
        <Form.Item
          style={{ marginBottom: "0px" }}
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          className='w-full'
          wrapperCol={{
            span: 24,
          }}
        >
          <Button className='w-full' type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
        <Divider className='text-center text-gray-500 mb-[20px]'>Or</Divider>
        <div className='flex justify-center flex-col items-center gap-5'>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              toast.success("Google login successful!");
            }}
            onError={() => {
              console.log('Login Failed');
              toast.error("Google login failed.");
            }}
            useOneTap
          />
          <TelegramLoginButton
            botName={import.meta.env.VITE_TELEGRAM_BOT_USERNAME}
            dataOnauth={user => {
              console.log(user);
              toast.success("Telegram login successful!");
            }}
          />
        </div>
        <Text className='mt-[20px] block text-center'> Don't have an account? <Link to="/auth/Register">Register</Link> </Text>
      </Form>
    </>
  );
};

export default Login;
