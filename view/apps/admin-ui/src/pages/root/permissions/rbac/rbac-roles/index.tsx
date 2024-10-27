import {Button, Table} from "antd";
import {useRbacService} from "../../../../../service/rbac/rbac.service";
import {useEffect, useState} from "react";
import {getBooleanValue, getValueOrDefault} from "../../../../../lib/utils";
import {RoleModal} from "./components/role-modal";

const RbacRoles = () => {

    const rbacService = useRbacService();
    const [roles, setRoles] = useState([]);
    const [addRoleModalVisible, setAddRoleModalVisible] = useState(false);

    useEffect(() => {
      rbacService.getRoles().then(({ data }) => {
        setRoles(data);
      });
    }, []);

      const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: getValueOrDefault
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          render: getValueOrDefault
        },
        {
          title: 'Active',
          dataIndex: 'isActive',
          key: 'isActive',
          render: getBooleanValue,
        },
        {
          title: 'Created At',
          dataIndex: 'createdAt',
          key: 'createdAt',
          render: getValueOrDefault
        },
        {
          title: 'Updated At',
          dataIndex: 'updatedAt',
          key: 'updatedAt',
          render: getValueOrDefault
        },
      ];

      return (
        <>
          <Button type="primary" onClick={() => setAddRoleModalVisible(true)}>Add Role</Button>
          <Table
            dataSource={roles}
            columns={columns}
            pagination={{ pageSize: 5 }}
            rowKey="id"
          />
          <RoleModal open={addRoleModalVisible} handleModal={setAddRoleModalVisible} selectedRole={null} />
        </>
      );

}

export default RbacRoles;
