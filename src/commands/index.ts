import { Command } from "commander";
import createTodoCommand from "./todo/command";
import packageJSON from "../../package.json";


export default function initApp() {
    const cmd = new Command();

    cmd
    .name(packageJSON.name)
    .description(packageJSON.description)
    .version(packageJSON.version);

    createTodoCommand(cmd);
    cmd.parse(process.argv);
}