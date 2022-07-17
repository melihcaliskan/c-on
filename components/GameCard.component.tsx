import { useRouter } from 'next/router';
import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import { IGame } from '../interfaces/IGame.interface';

export function GameCard(props: IGame.IGameCardProps) {
  const router = useRouter();
  const { game } = props;

  if (!game) {
    console.warn("No data provided...");
    return null;
  }

  const { code, description, icon, name } = game;

  function onPlay() {
    router.push(`/game/${code}`)
  }

  return (
    <>
      <Item>
        <Item.Image size='small' src={icon} />

        <Item.Content>
          <Item.Header as='a'>{name}</Item.Header>
          <Item.Description>
            {description}
          </Item.Description>

          <Button
            secondary
            content='Play'
            icon='right chevron'
            labelPosition='right'
            floated='right'
            onClick={onPlay}
          />
        </Item.Content>
      </Item>
    </>
  )
}

export default GameCard;