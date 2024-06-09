import { Command } from "commander";
import packageJSON from "../package.json";
import { handleGetTodoFirstEven20Command } from "./actions/handler";

const program = new Command();

program
    .name(packageJSON.name)
    .description(packageJSON.description)
    .version(packageJSON.version);

program.command('get-even-20')
    .description('fetch a todo and display it')
    .option('--first 20', 'display just the first substring')
    .action(handleGetTodoFirstEven20Command);

program.parse();