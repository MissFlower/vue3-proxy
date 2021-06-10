//import { reactive } from '@vue/reactivity';
import { reactive } from './vue3/reactivity';
// composition API
// reactive -> es6 Proxy 代理 API
const state = reactive({
  name: '小野森森',
  age: 34,
  info: {
    job: 'teacher',
    students: [
      {
        id: 1,
        name: '小张'
      },
      {
        id: 2,
        name: '小王'
      }
    ]
  },
  hobby: ['piano', 'travel', 'film']
});

// state.name;
// state.name = '小野';
// state.info.job = 'FE teacher';
// state.hobby.push('coding');
// state.info.students.push({
//   id: 3,
//   name: '小李'
// });

// state.name = '小野';
// state.age = 35,
// state.info.job = 'FE teacher';
// state.info.students.push({
//   id: 3,
//   name: '小李'
// });
// state.hobby.push('coding');

// console.log(state.name);
state.name = '宵夜'