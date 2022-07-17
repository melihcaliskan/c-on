import React from 'react'
import { Item } from 'semantic-ui-react'
import { IGame } from '../interfaces/IGame.interface';

export function GameCard(props: IGame.IGameCardProps) {
  const { game } = props;
  const { code, description, icon, name } = game;
  return (
    <Item>
      <Item.Image size='small' src={icon} />

      <Item.Content>
        <Item.Header as='a'>{name}</Item.Header>
        <Item.Description>
          {description}
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

export default GameCard;