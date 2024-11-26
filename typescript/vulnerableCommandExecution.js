const { execFile } = require('child_process');
const express = require('express');

const app = express();

app.use(express.json());

app.post('/run-command', (req, res) => {
    const userCommand = req.body.command;  // User input from the request body

    // Whitelist of allowed commands
    const allowedCommands = ['ls', 'echo', 'date'];

    // Split the command and its arguments
    const [command, ...args] = userCommand.split(' ');

    // Check if the command is in the whitelist
    if (!allowedCommands.includes(command)) {
        res.status(400).send('Command not allowed');
        return;
    }

    // Use execFile instead of exec
    execFile(command, args, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            res.status(500).send(`Command stderr: ${stderr}`);
            return;
        }

        res.send(`Command output: ${stdout}`);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
