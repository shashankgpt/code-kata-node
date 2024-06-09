import { Command } from "commander";
import packageJSON from "../package.json";
import { handleGetTodoCommand } from "./actions/handler";

const program = new Command();

program
    .name(packageJSON.name)
    .description(packageJSON.description)
    .version(packageJSON.version);

program.command('get-even [count]')
    .description('fetch a todo and display it')
    .option('[count]', 'number of todos to be displayed (default: 20)')
    .action(handleGetTodoCommand);

program.parse();