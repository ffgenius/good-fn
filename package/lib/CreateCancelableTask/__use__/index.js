import { createCancelableTask } from '../index.js';
const fetchData = (url) => {
    return new Promise((resolve) => setTimeout(() => resolve('data from ' + url), 1000));
};
const { execute, cancel } = createCancelableTask(fetchData);
execute('http://example.com/api/data1').then(res => console.log(res));
execute('http://example.com/api/data1').then(res => console.log(res));
