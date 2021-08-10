import axios from 'axios';
import { useState, useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';
import {BrowserRouter,NavLink,Route} from 'react-router-dom'
import UserPage from './components/pages/UsersPage';
import TodosPage from './components/pages/TodosPage';
import UserItemPage from './components/pages/UserItemPage';
import TodoItemPage from './components/pages/TodoItemPage';

function App() {
  return (
    <div>
      <EventsExample />
      <Card 
        onClick={(num)=> console.log('click',num)} 
        variant={CardVariant.outlined} 
        width="100px" 
        height="100px" 
      >
        <button>button</button>
      </Card>
      <BrowserRouter >
        <div>
          <NavLink to={'/users'}>
            Users
          </NavLink>
          <NavLink to={'/todos'}>
            Todos
          </NavLink>
        </div>
        <div>
          <Route path={'/users'} exact>
            <UserPage />
          </Route>
            <Route path={'/todos'} exact>
            <TodosPage />
          </Route>
          <Route path={'/users/:id'} exact>
            <UserItemPage/>
          </Route>
          <Route path={'/todos/:id'} exact>
            <TodoItemPage/>
          </Route>
        </div>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
