import { Command } from "commander";
import { handleGetTodoCommand } from "../actions/handler";

export default function createTodoCommand(cmd: Command) {
    cmd
        .command('get-todo [count]')
        .description('fetch a todo and display it')
        .alias('gt')
        .option('-e, --even', 'display even todos', true)
        .action(handleGetTodoCommand);
}