import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Form, Message, Grid } from 'semantic-ui-react'
import LoginService from '@/services/Login.service';
import { ILogin } from '@/interfaces/ILogin.interface';
import { useAuth } from '@/contexts/Auth.context';
import { AuthConst } from '@/contexts/Auth.const';

export function Home() {
  const router = useRouter();
  const { authState, dispatch }: any = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<ILogin.ILoginResponse>({});

  function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("authState", authState)
    // Prevent default action
    // and set loading
    e.preventDefault();
    setLoading(true);


    // Validate inputs
    if (username?.length === 0 && password?.length === 0) {
      setRes({
        error: "Enter your username and password.",
        status: "fail"
      })
      setLoading(false);
      return;
    }

    LoginService.Login({ username, password })
      .then(handleSuccess)
      .catch(handleError);

    setLoading(false);
  }

  function handleSuccess(data: ILogin.ILoginResponse) {
    setRes(data);

    if (data?.status === "success") {
      dispatch({
        type: AuthConst.LOGIN,
        payload: data.player
      })
      router.replace("/home");
    }
  }

  function handleError(err: any) {
    setRes(err.response.data);
  }

  return (
    <Grid centered className="login">
      <Grid.Row>
        <Grid.Column width={4}>
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
              type='submit'
              content='Login'
              labelPosition='right'
              icon='right chevron'
              onClick={onSubmit}
            />
          </Form>
        </Grid.Column>
      </Grid.Row>

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
    </Grid>
  )
}

export default Home
