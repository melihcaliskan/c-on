import { useState } from 'react'
import { Button, Form, Message, Grid } from 'semantic-ui-react'
import { ILogin } from '@/interfaces/ILogin.interface';
import { useAuth } from '@/contexts/Auth.context';
import LoginService from '@/services/Login.service';
import { useRouter } from 'next/router';

export function Login() {
  const router = useRouter();
  const { authState, login }: any = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<ILogin.ILoginResponse>({});

  function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    // Prevent default action
    // and set loading
    e.preventDefault();
    setLoading(true);


    // Validate inputs
    if (username?.length === 0 || password?.length === 0) {
      setRes({
        error: "Enter your username and password.",
        status: "fail"
      })
      setLoading(false);
      return;
    }

    // Make network request
    LoginService.Login({ username, password })
      .then(handleSuccess)
      .catch(handleError);

    setLoading(false);
  }

  function handleSuccess(data: ILogin.ILoginResponse) {
    // Set response
    setRes(data);

    // Add username to response
    const userData = {
      ...data.player,
      username
    }

    // Call useAuth.login for dispatch and redirect
    login(userData);
  }

  function handleError(err: any) {
    setRes(err.response.data);
  }

  function renderForm() {
    return (
      <Grid.Row>
        <Grid.Column
          mobile={16}
          computer={4}>
          <Form loading={loading}>
            <Form.Field>
              <Form.Input
                placeholder='Username'
                icon='user'
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                placeholder='Password'
                type='password'
                icon='lock'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Field>

            <Button
              basic
              fluid
              type='submit'
              content='Login'
              labelPosition='right'
              icon='right chevron'
              onClick={onSubmit}
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
    )
  }

  function renderMessage() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Form
            success={res?.status === 'success'}
            error={res?.status === 'fail'}>

            <Message
              error
              header='Something went wrong...'
              content={res?.error}
            />

            <Message
              success
              header='Success!'
              content="You are successfully logged in... You are being redirected"
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
    )
  }

  return (
    <Grid centered className="login">
      {renderForm()}
      {renderMessage()}
    </Grid>
  )
}

export default Login;
