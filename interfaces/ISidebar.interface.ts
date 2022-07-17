export namespace ISidebar {
  export interface ICategoryItem {
    id: number;
    name: string;
  }

  export interface ISidebarProps {
    categories?: ICategoryItem[];
    filteredCategory?: ICategoryItem;
    setFilteredCategory: (category: ICategoryItem) => void;
  }
}