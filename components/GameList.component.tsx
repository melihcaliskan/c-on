import React from 'react'
import { Container, Divider, Header, Item } from 'semantic-ui-react'
import { IGame } from '../interfaces/IGame.interface';
import GameCard from './GameCard.component';
import GamePlaceholder from './GamePlaceholder.component';

export function GameList(props: IGame.IGameListProps) {
  const { games } = props;

  function renderList() {
    if (typeof games === "undefined") {
      return (
        [...Array(5)].map((e, idx) =>
          <GamePlaceholder
            key={idx}
          />
        )
      )
    }

    return games?.map((game, idx) =>
      <GameCard
        key={idx}
        game={game} />
    )
  }

  return (
    <Container>
      <Header as='h3'>Games</Header>
      <Divider />

      <Item.Group
        relaxed
        divided>
        {renderList()}
      </Item.Group>
    </Container>
  )
}

export default GameList;