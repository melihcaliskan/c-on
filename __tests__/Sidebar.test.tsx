// @ts-nocheck
import { render } from '@testing-library/react'
import Sidebar from '@/components/Sidebar.component';

const CATEGORIES_DATA = [
  {
    id: 0,
    name: "ALL"
  }
]

describe('Sidebar', () => {
  it('should render placeholder when no data provided', () => {
    const { container } = render(<Sidebar />)

    const placeholder = container.querySelector("div.placeholder");
    expect(placeholder).toBeInTheDocument();
  });

  it('should render category list', () => {
    const { container } = render(<Sidebar categories={CATEGORIES_DATA} />)

    const categoryList = container.querySelector(".item");
    const category = categoryList?.querySelector(".content");
    const name = category?.querySelector(".header")?.textContent;

    expect(category).toBeInTheDocument();
    expect(name).toBe(CATEGORIES_DATA[0].name);
  });
})