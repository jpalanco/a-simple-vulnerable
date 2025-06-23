const axios = require('axios');

async function testCommandExecution() {
    const url = 'http://localhost:3000/run-command';

    // Test with an allowed command
    try {
        const response = await axios.post(url, { command: 'echo Hello' });
        console.log('Allowed command response:', response.data);
    } catch (error) {
        console.error('Error with allowed command:', error.response ? error.response.data : error.message);
    }

    // Test with a disallowed command
    try {
        const response = await axios.post(url, { command: 'rm -rf /' });
        console.log('Disallowed command response:', response.data);
    } catch (error) {
        console.error('Error with disallowed command:', error.response ? error.response.data : error.message);
    }
}

testCommandExecution();
