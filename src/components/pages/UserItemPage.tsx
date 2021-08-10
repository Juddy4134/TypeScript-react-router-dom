import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { IUser } from '../../types/types';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {
    const [user,setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()

    useEffect(()=> {
      fetchUser();
    },[])
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        setUser(response.data)
      } catch (e) {
        alert(e)
      }
    }
  
    return (
        <div>
            <button onClick={()=> history.push('/users')}>back</button>
            <h1>Page of user {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
        </div>
    );
};

export default UserItemPage;