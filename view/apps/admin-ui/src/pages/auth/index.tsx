import { Form, Input, Button, Card } from 'antd';
import {useAuthService} from "../../service/auth/auth.service";

const Auth = () => {
    const auth = useAuthService();

    async function onFinish(values: any) {
        await auth.authenticate(values.email, values.password);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="Heimdall" style={{ width: 300 }}>
            <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                name="email"
                rules={[{ required: true, message: 'Por favor, insira seu e-mail!' }]}
                >
                <Input placeholder="E-mail" />
                </Form.Item>

                <Form.Item
                name="password"
                rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
                >
                <Input.Password placeholder="Senha" />
                </Form.Item>

                <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Login
                </Button>
                </Form.Item>
            </Form>
            </Card>
        </div>
    );
}

export default Auth;
