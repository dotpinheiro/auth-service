import {Button, Table} from "antd";
import {useUserService} from "../../../service/users/users.service";
import * as React from "react";
import {UserModal} from "./components/user-modal";

const Users = () => {
    const userService = useUserService();
    const [users, setUsers] = React.useState();
    const [selectedUser, setSelectedUser] = React.useState();
    const [addUserModalVisible, setAddUserModalVisible] = React.useState(false);

    React.useEffect(() => {
        async function fetchUsers() {
            const { data } = await userService.getUsers();
            setUsers(data);
        }

        fetchUsers();
    },[]);

      const columns = [
        {
          title: 'UUID',
          dataIndex: 'uuid',
          key: 'uuid',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'User',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'E-mail',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Created At',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
          title: 'Actions',
          key: 'actions',
          render: (text, record) => (
            <Button type="link" onClick={() => {
              setSelectedUser(record);
              setAddUserModalVisible(true);
            }}>Edit</Button>
          )
        }
      ];

      return (
        <>
          <Button type="primary" onClick={() => setAddUserModalVisible(true)}>Create User</Button>
          <Table
            dataSource={users}
            columns={columns}
            pagination={{ pageSize: 5 }}
            rowKey="uuid"
          />
          <UserModal open={addUserModalVisible} handleModal={setAddUserModalVisible} selectedUser={selectedUser}/>
        </>
      );
}

export default Users;
