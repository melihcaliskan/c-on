export namespace IGame {
  export interface IGameItem {
    name: string;
    description: string;
    code: string;
    icon: string;
    categoryIds: number[];
  }

  export interface IGameCardProps {
    game: IGameItem;
  }

  export interface IGamePageProps extends IGameCardProps {
    gameSource: string;
  }

  export interface IGameListProps {
    games: IGameItem[];
  }
}