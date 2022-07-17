import { ISidebar } from '@/interfaces/ISidebar.interface';
import React from 'react'
import { Container, Divider, Header, List } from 'semantic-ui-react'
import CategoryPlaceholder from './CategoryPlaceholder.component';

export function Sidebar(props: ISidebar.ISidebarProps) {
  const { categories } = props;

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
      return (
        <List.Item key={idx}>
          <List.Header>{name}</List.Header>
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