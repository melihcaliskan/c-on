import React from 'react'
import { Container, Divider, Header, Icon, List } from 'semantic-ui-react'
import { ISidebar } from '@/interfaces/ISidebar.interface';
import CategoryPlaceholder from './CategoryPlaceholder.component';

export function Sidebar(props: ISidebar.ISidebarProps) {
  const { categories, selectedCategory, setCategory } = props;

  function filterCategory(category: ISidebar.ICategoryItem) {
    setCategory(category);
  }

  function renderList() {
    if (typeof categories === "undefined") {
      return (
        [...Array(5)].map((e, idx) =>
          <CategoryPlaceholder
            key={idx}
          />
        )
      )
    }

    return categories?.map((category, idx) => {
      const { name } = category;
      const selected = category.id === selectedCategory?.id;
      return (
        <List.Item onClick={() => filterCategory(category)} key={idx}>
          {selected &&
            <Icon name='angle right' />
          }
          <List.Content>
            <List.Header>{name}</List.Header>
          </List.Content>
        </List.Item>
      )
    }
    )
  }


  return (
    <Container>
      <Header as='h3'>Categories</Header>
      <Divider />
      <List
        animated
        selection>
        {renderList()}
      </List>
    </Container>
  )
}

export default Sidebar;