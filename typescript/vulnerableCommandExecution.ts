import { exec } from 'child_process';
import express from 'express';

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
@ -22,6 +34,7 @@ app.post('/run-command', (req, res) => {
        res.send(`Command output: ${stdout}`);
    });
});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

