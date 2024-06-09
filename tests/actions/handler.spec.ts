import {handleGetTodoCommand} from '../../src/actions/handler';
const logMock = jest.fn();
console.log = logMock;

describe('handleGetTodoCommand', () => {
    it('should return an array of even numbers', async () => {
        await handleGetTodoCommand(2);
        const todo = logMock.mock.calls
        expect(todo).toMatchObject([
            ['Id:2 [ ] - quis ut nam facilis et officia qui',],
            ['Id:4 [x] - et porro tempora',],
        ]);
    });
})