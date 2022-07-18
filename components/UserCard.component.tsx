import { useAuth } from '@/contexts/Auth.context';
import { ILogin } from '@/interfaces/ILogin.interface';
import { Item, Button } from "semantic-ui-react";

export function UserCard() {
  const { authState, logOut }: any = useAuth();
  const { avatar, event, name }: ILogin.Player = authState

  function onLogout() {
    logOut();
  }

  return (
    <>
      <Item.Group>
        <Item>
          <Item.Image
            avatar
            className='avatar'
            size='mini'
            floated='left'
            alt={`${name}'s Avatar`}
            src={`/${avatar}`} />

          <Item.Content>
            <Item.Header>
              {name}
            </Item.Header>
            <Item.Description>
              {event}
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>

      <Button
        secondary
        className='logoutBtn'
        icon='left chevron'
        content='Log Out'
        onClick={onLogout}
      />
    </>
  )
}