import {Button, Form, Input, Modal, notification} from "antd";
import {useUserService} from "../../../../../service/users/users.service";
import {useEffect, useState} from "react";

export const UserModal = ({ open, handleModal, selectedUser }) => {

  const userService = useUserService();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if(selectedUser){
      form.setFieldsValue({ ...selectedUser });
    }
  },[selectedUser])

  async function onFinish(values) {
    setLoading(true);
    try {
      if(selectedUser){
        await userService.updateUser(selectedUser.uuid, values);
        handleModal(false);
        notification.success({ message: 'Success', description: 'User updated successfully!' });
        return;
      }
      await userService.createUser(values);
      handleModal(false);
      notification.success({ message: 'Success', description: 'User created successfully!' });
    }catch (e){
      notification.error({ message: 'Error', description: e.message });
    }finally {
      setLoading(false);
    }
  }

  return (
    <Modal title="Add user" open={open} onCancel={() => handleModal(false)} footer={null}>
      <Form
        name="addUser"
        form={form}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          value={selectedUser?.name}
          rules={[{ required: true, message: 'Please enter the user\'s name!' }]}
        >
          <Input placeholder="Enter name"  />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          value={selectedUser?.username}
          rules={[{ required: true, message: 'Please enter the username!' }]}
        >
          <Input placeholder="Enter username" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter the user\'s email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter the user\'s password!' }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}
