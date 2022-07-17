export namespace ISidebar {
  export interface ICategoryItem {
    id: number;
    name: string;
  }

  export interface ISidebarProps {
    categories?: ICategoryItem[];
    selectedCategory?: ICategoryItem;
    setCategory: (category: ICategoryItem) => void;
  }
}