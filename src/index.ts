import chalk from "chalk";
import { Command } from "commander";
import packageJSON from "../package.json";

function init() {

    const program = new Command();
    program
        .version(packageJSON.version, "-v, --version")
        .description(packageJSON.description)
        .name(packageJSON.name)
        .parse(process.argv);
}
init();