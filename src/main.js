import inquirer from 'inquirer';
import { io } from "socket.io-client";

const CLI = async () => {
    const socket = io("ws://localhost:3000");
    socket.on('connect', () => {
        console.log('-- client connected');
        inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'Which character would you like to search for?'
            }
        ]).then(async answers => {
            try {
                console.log(`Searching for ${answers.name}...`);
                await new Promise((resolve, reject) => {
                    socket.emit('search', { 'query': answers.name });
                    socket.on('search', (res) => {
                        const { resultCount, page, name, films } = res;
                        if (resultCount < 1 ) {
                            reject(`ERR: No valid matches found for query ${answers.name}`);
                        } else {
                            console.log(`(${page}/${resultCount}) ${name} - [${films}]`);
                            if (page === resultCount ) {
                                resolve(true);
                            }
                        }
                    });
                    socket.on('error', () => {
                        reject(`ERR: No valid matches found for query ${answers.name}`);
                    });
                });
                CLI();
            } catch (error) {
                console.log(error);
                CLI();
            }
        });
    });
}

CLI();
