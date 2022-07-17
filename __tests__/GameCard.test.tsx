// @ts-nocheck
import { render } from '@testing-library/react'
import GameCard from '@/components/GameCard.component';

const GAME_DATA = {
  "name": "Jack Hammer",
  "description": "Jack Hammer is a 25-line, 3-row video slot using 15 independent reels set in the gritty, glamorous underworld of a crime fighting private eye.The game features Sticky Wins, Free Spins and Wild Substitutions.",
  "code": "jackhammer",
  "icon": "images/game-icon/jackhammer.jpg",
  "categoryIds": [
    0,
    1
  ]
};

describe('GameCard', () => {
  it('should not crash when no data provided', () => {
    render(<GameCard />)
  });

  it('should render correct data', () => {
    const { container } = render(<GameCard game={GAME_DATA} />)

    const title = container.querySelector(".header")?.textContent;
    const description = container.querySelector(".description")?.textContent;
    const playBtn = container.querySelector("button");

    expect(title).toBe(GAME_DATA.name);
    expect(description).toBe(GAME_DATA.description);
    expect(playBtn).toBeInTheDocument();
  });
})