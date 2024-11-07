import { exec } from 'child_process';
import express from 'express';

const app = express();

app.use(express.json());

app.post('/run-command', (req, res) => {
    const userCommand = req.body.command;  // User input from the request body

    // Vulnerability: Directly using user input in a command executed by the system
    exec(userCommand, (error, stdout, stderr) => {
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

