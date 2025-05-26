import {useEffect, useState} from "react";
import {Button, Form, Input, Modal, notification} from "antd";
import {useRbacService} from "../../../../../../../service/rbac/rbac.service";


export const PermissionModal = ({ open, handleModal, selectedPermission }) => {

  const rbacService = useRbacService();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if(selectedPermission){
      form.setFieldsValue({ ...selectedPermission });
    }
  },[selectedPermission])

  async function onFinish(values) {
    console.log(values)
    setLoading(true);
    try {
      await rbacService.createPermission(values);
      handleModal(false);
      notification.success({ message: 'Success', description: 'Permission created successfully!' });
    }catch (e){
      notification.error({ message: 'Error', description: e.message });
    }finally {
      setLoading(false);
    }
  }

  return (
    <Modal title="Add permission" open={open} onCancel={() => handleModal(false)} footer={null}>
      <Form
        name="addUser"
        form={form}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          value={selectedPermission?.name}
          rules={[{ required: true, message: 'Please enter the permission\'s name!' }]}
        >
          <Input placeholder="Enter name"  />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          value={selectedPermission?.description}
          rules={[{ required: true, message: 'Please enter the permission\'s name!' }]}
        >
          <Input placeholder="Enter Description"  />
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
