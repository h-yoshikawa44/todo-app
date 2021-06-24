import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import AddTodoForm from '@/components/AddTodoForm';
import TodoList from '@/components/TodoList';
import { Todo } from '@/models/Todo';

const data: Todo[] = [
  {
    title: 'test todo',
    status: 'active',
  },
  {
    title: 'test todo2',
    status: 'completed',
  },
  {
    title: 'test todo3',
    status: 'active',
  },
  {
    title: 'test todo4',
    status: 'completed',
  },
];

const Home = () => {
  return (
    <Layout>
      <main css={mainBlock}>
        <AddTodoForm />
        <TodoList data={data} />
      </main>
    </Layout>
  );
};

const mainBlock = css`
  padding: 16px 0;
`;

export default Home;
