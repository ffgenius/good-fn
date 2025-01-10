import { createAsyncQueue } from '..'

function mockAsyncFn(id: number): Promise<string> {
  console.log(Math.random() * 2000)
  return new Promise(resolve => setTimeout(() => resolve(`Response from ${id}`), Math.random() * 2000))
}

const asyncFn = createAsyncQueue(mockAsyncFn)

asyncFn(1).then((res) => { console.log(res) })
asyncFn(2).then((res) => { console.log(res) })
asyncFn(3).then((res) => { console.log(res) })
asyncFn(4).then((res) => { console.log(res) })
asyncFn(5).then((res) => { console.log(res) })
