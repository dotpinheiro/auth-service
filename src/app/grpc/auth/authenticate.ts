import { AuthenticationService } from "../../../domain/authentication/service/authentication.service";

export async function authenticate(call: any, callback: any) {
  const { request } = call;
  const { email, password } = request;

  const authService = new AuthenticationService();
  const response = await authService.authenticate(email, password);

  console.log(`User ${response.user} authenticated`);
  callback(null, { token: response.session.token });
}
