import { GET_TODO_LIST } from './actions-types';
import { SET_TODOS } from './mutations-types';

export default {
  [GET_TODO_LIST]: ({commit}) => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
      response.json()
    ).then(data => commit(SET_TODOS, data));
  },
};
