import React from 'react'
import { Container, Divider, Header, Item } from 'semantic-ui-react'
import { IGame } from '../interfaces/IGame.interface';
import GameCard from './GameCard.component';

export function GameList(props: IGame.IGameListProps) {
  const { games } = props;
  return (
    <Container>
      <Header as='h3'>Games</Header>
      <Divider />

      <Item.Group
        relaxed
        divided>
        {games.map((game, idx) =>
          <GameCard
            key={idx}
            game={game} />
        )}
      </Item.Group>
    </Container>
  )
}

export default GameList;