import {Button, Table} from 'antd';
import {useRbacService} from "../../../../../service/rbac/rbac.service";
import {useEffect, useState} from "react";
import {getBooleanValue, getValueOrDefault} from "../../../../../lib/utils";
import {PermissionModal} from "./components/permission-modal";

const RbacPermissions = () => {

    const rbacService = useRbacService();
    const [permissions, setPermissions] = useState([]);
    const [permissionsModalVisible, setPermissionsModalVisible] = useState(false);

    useEffect(() => {
      rbacService.getPermissions().then(({ data }) => {
        setPermissions(data);
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
        <Button type="primary" onClick={() => setPermissionsModalVisible(true)}>Add Permission</Button>
        <Table
          dataSource={permissions}
          columns={columns}
          pagination={{ pageSize: 5 }}
          rowKey="id"
        />
        <PermissionModal open={permissionsModalVisible} handleModal={setPermissionsModalVisible} />
        </>
      );
}

export default RbacPermissions;
