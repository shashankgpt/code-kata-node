import {handleGetTodoCommand} from '../../src/actions/handler';
const logMock = jest.fn();
console.log = logMock;

const errorLog = jest.fn();
console.error = errorLog;

describe('handleGetTodoCommand', () => {
    describe('When API request is success', () => {
        it('should display todo list', async () => {
            await handleGetTodoCommand(2);
            expect(logMock.mock.calls).toMatchObject([
                ['Id:2 [ ] - quis ut nam facilis et officia qui',],
                ['Id:4 [x] - et porro tempora',],
            ]);
        });
    });


    describe('When API request is fail', () => {
        beforeAll(() => {
            jest.spyOn(global, 'fetch').mockRejectedValue(new Error('error')); 
        })
        it('should display error', async () => {
            await handleGetTodoCommand(1);
            expect(errorLog).toHaveBeenCalledTimes(1)
        });
    });
})