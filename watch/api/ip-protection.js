import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
    const ALLOWED_IPS = [
        '15.204.221.39', // Replace with your allowed IPs
        '185.26.9.185',
        '135.148.55.75', // Added IP address to the allowlist
        '15.204.161.115'
    ];

    // Get the IP address from the request headers
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;

    // Normalize IPv6 addresses if needed
    const normalizedIp = ip.includes('::ffff:') ? ip.replace('::ffff:', '') : ip;

    if (!ALLOWED_IPS.includes(normalizedIp)) {
        res.status(403).send(`Access Denied: Your IP (${normalizedIp}) is not allowed.`);
        return;
    }

    // Get the path from the URL (e.g., /cbshd, /tbshd)
    const folderName = req.url.substring(1); // Remove the leading slash from the URL

    // Define the path to the folder for the requested content
    const folderPath = path.resolve('./public', folderName); // Directly use public directory

    console.log(`Requested folder path: ${folderPath}`); // Log the folder path for debugging

    // Check if the folder exists
    fs.stat(folderPath, (err, stats) => {
        if (err || !stats.isDirectory()) {
            console.error(`Folder not found or not a directory: ${folderPath}`);
            res.status(404).send('Content not found');
            return;
        }

        // If the folder exists, serve the content (index.html)
        const filePath = path.join(folderPath, 'index.html');
        console.log(`Serving file: ${filePath}`); // Log the file path being served

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading the file:', err);
                res.status(500).send('Error loading the page');
                return;
            }
            res.setHeader('Content-Type', 'text/html');
            res.status(200).send(data); // Serve the content
        });
    });
}
