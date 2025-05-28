function logToServer(message) {
  fetch(`https://logsystem.vercel.app/api/log?log=${encodeURIComponent(message)}`)
    .catch(err => console.error('Logging error:', err));
}

logToServer('User opened chat interface.');

const conversationHistory = [];
const API_KEY = 'AIzaSyCkrAVXM7VDR-zcU2rRozHHupZd6cil64o';
// Replace with your actual Gemini API key – this stores the API key to authenticate requests to the Gemini API.

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
// The base URL of the Gemini API used to generate content (for text-based responses).

const languageMap = {
    english: 'eng',
    spanish: 'spa',
    french: 'fre',
    german: 'ger',
    italian: 'ita',
    chinese: 'chs',
    japanese: 'jpn',
    korean: 'kor',
    arabic: 'ara',
    russian: 'rus',
    portuguese: 'por',
    vietnamese: 'vnm',
    thai: 'tha',
    auto: 'auto'
};

// Get the AI provider select dropdown
const aiProviderSelect = document.getElementById('ai-provider-select');

const chatMessages = document.getElementById('chat-messages');
// Gets the DOM element with the ID 'chat-messages', where the chat messages (user and bot) will be displayed.

const userInput = document.getElementById('user-input');
// Gets the DOM element with the ID 'user-input', which is the input field where the user types their message.

const sendButton = document.getElementById('send-button');
// Gets the DOM element with the ID 'send-button', which is the button the user clicks to send their message.

const contextToggle = document.getElementById('context-toggle');

let selectedImageData = null;
let selectedFile = null;

async function generateResponse(prompt) {
    logToServer(`Generating response using ${aiProviderSelect?.value}`);
    if (aiProviderSelect?.value === 'alt') {
        // Support "Remember Previous Messages" toggle for alternate API
        const apiKey = 'd0aab2322d828fa9de3401e651302788';
        const model = 'gpt-3.5-turbo';
        const useContext = contextToggle?.checked;
        const promptValue = useContext
            ? [...conversationHistory.map(entry => `${entry.role === 'user' ? 'User' : 'Assistant'}: ${entry.parts[0].text}`), `User: ${prompt}`].join('\n')
            : prompt;
        const qs = new URLSearchParams({
            prompt: promptValue,
            api_key: apiKey,
            model: model
        });
        const encodedUrl = encodeURIComponent(`http://195.179.229.119/gpt/api.php?${qs.toString()}`);
        const proxyUrl = `https://scrape2-ruddy.vercel.app/api/scrape?url=${encodedUrl}`;

        try {
            const response = await fetch(proxyUrl);
            if (!response.ok) throw new Error('Alternate AI API request failed');

            const data = await response.text();

            try {
                const parsed = JSON.parse(data);
                if (parsed?.content?.content) {
                    return parsed.content.content;
                }
            } catch (e) {
                // not JSON, fall through
            }

            if (data.includes('<')) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                return (tempDiv.textContent || tempDiv.innerText || '').trim();
            }

            return data;
        } catch (err) {
            console.error('Alternate AI API Error:', err);
            return 'An error occurred using the alternate AI API.';
        }
    } else if (aiProviderSelect?.value === 'chatgpt2') {
        const useContext = contextToggle?.checked;
        const promptValue = useContext
            ? [...conversationHistory.map(entry => `${entry.role === 'user' ? 'User' : 'Assistant'}: ${entry.parts[0].text}`), `User: ${prompt}`].join('\n')
            : prompt;

        try {
            const response = await fetch('https://chatgpt-api7.p.rapidapi.com/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '1a9b0fb267msh6baa89733baea49p1b7dbfjsnab05e6fa9631',
                    'X-RapidAPI-Host': 'chatgpt-api7.p.rapidapi.com'
                },
                body: JSON.stringify({ query: promptValue })
            });

            if (!response.ok) throw new Error('ChatGPT 2 API request failed');

            const data = await response.json();
            return data.response || 'No response from ChatGPT 2 API.';
        } catch (err) {
            console.error('ChatGPT 2 API Error:', err);
            return 'An error occurred using ChatGPT 2.';
        }
    } else {
        // Gemini default
        const useContext = contextToggle?.checked;
        const contents = useContext
            ? [...conversationHistory, { role: "user", parts: [{ text: prompt }] }]
            : [{ role: "user", parts: [{ text: prompt }] }];

        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ contents })
        });

        if (!response.ok) throw new Error('Failed to generate response');

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }
}

function cleanMarkdown(text) {
// Defines a function `cleanMarkdown` to remove any Markdown formatting (like headers, bold text, etc.) from the response.
    return text
        .replace(/#{1,6}\s?/g, '')
        // Removes any Markdown headers (e.g., #, ##, ###).

        .replace(/\*\*/g, '')
        // Removes bold formatting (double asterisks **).

        .replace(/\n{3,}/g, '\n\n')
        // Limits excessive newlines to a maximum of two (replaces more than two newlines with two).

        .trim();
        // Removes any whitespace from the start and end of the string.
}

function addMessage(message, isUser) {
// Defines a function `addMessage` to add a new message to the chat display. It takes the `message` (text) and `isUser` (boolean indicating whether the message is from the user or the bot).
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    // Creates a new `div` element for the message and adds the 'message' CSS class.

    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    // Adds a class based on whether the message is from the user ('user-message') or the bot ('bot-message').

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    // Creates an image element for the profile picture (either the user or the bot) and adds the 'profile-image' CSS class.

    profileImage.src = isUser ? 'user.jpg' : 'bot.jpg';
    // Sets the image source depending on whether it's a user or bot message ('user.jpg' or 'bot.jpg').

    profileImage.alt = isUser ? 'User' : 'Bot';
    // Sets the alternate text for the image (for accessibility), either 'User' or 'Bot'.

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    // Creates a `div` element to hold the text content of the message and adds the 'message-content' CSS class.

    messageContent.textContent = message;
    // Sets the text content of the message.

    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);
    // Appends the profile image and message content to the message element.

    chatMessages.appendChild(messageElement);
    // Appends the complete message (with profile image and text) to the chat messages section.

    chatMessages.scrollTop = chatMessages.scrollHeight;
    // Scrolls the chat to the bottom to ensure the latest message is visible.
}

async function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        logToServer(`User submitted message: ${userMessage}`);
        addMessage(userMessage, true);
        conversationHistory.push({ role: "user", parts: [{ text: userMessage }] });
        userInput.value = '';
        sendButton.disabled = true;
        userInput.disabled = true;
        try {
            const botMessage = await generateResponse(userMessage);
            addMessage(cleanMarkdown(botMessage), false);
            conversationHistory.push({ role: "model", parts: [{ text: botMessage }] });
            logToServer(`Bot responded with: ${botMessage}`);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, I encountered an error. Please try again.', false);
        } finally {
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();
        }
    }
}

sendButton.addEventListener('click', handleUserInput);
// Adds an event listener to the send button that calls `handleUserInput` when clicked.

userInput.addEventListener('keypress', (e) => {
// Adds an event listener for when a key is pressed in the input field.
    if (e.key === 'Enter' && !e.shiftKey) {
    // Checks if the 'Enter' key is pressed and Shift is not held (to distinguish from Shift+Enter for newlines).
        e.preventDefault();
        // Prevents the default behavior of adding a newline.

        handleUserInput();
        // Calls `handleUserInput` to send the message.
    }
});

const imageUploadButton = document.getElementById('image-upload-button');
const imageUpload = document.getElementById('image-upload');

imageUploadButton.addEventListener('click', () => {
    imageUpload.click();
});

imageUpload.addEventListener('change', async () => {
    const file = imageUpload.files[0];
    if (!file) return;

    addMessage("Preparing image... 🛠️", false);

    // Slight compression helper
    const compressImage = (file, maxSizeKB) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            const url = URL.createObjectURL(file);
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                let width = img.naturalWidth;
                let height = img.naturalHeight;
                const MAX_WIDTH = 1200;

                if (width > MAX_WIDTH) {
                    height = Math.round((MAX_WIDTH / width) * height);
                    width = MAX_WIDTH;
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob(blob => {
                    if (blob && blob.size / 1024 <= maxSizeKB) {
                        resolve(blob);
                    } else {
                        resolve(file); // fallback: use original if compression not sufficient
                    }
                    URL.revokeObjectURL(url);
                }, 'image/jpeg', 0.85);
            };
            img.onerror = reject;
            img.src = url;
        });
    };

    addMessage("Compressing image (if needed)... 📉", false);
    const compressedBlob = await compressImage(file, 1024);
    const reader = new FileReader();

    reader.onloadend = async function () {
        addMessage("Converting image to base64... 🔄", false);
        const base64Image = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
        selectedImageData = base64Image;
        selectedFile = new File([compressedBlob], 'compressed.jpg', { type: 'image/jpeg' });
        addMessage("Image ready! Please choose the language. 🌐", false);
        logToServer('Image uploaded and ready for OCR.');
        document.getElementById('language-modal').style.display = 'flex';
    };

    reader.readAsDataURL(compressedBlob);
});

async function processOCR(language) {
    const formData = new FormData();
    formData.append('apikey', 'K88205300088957');
    formData.append('base64Image', `data:${selectedFile.type};base64,${selectedImageData}`);
    formData.append('language', language);

    addMessage(`[Image uploaded. Extracting text in '${language}'... ⏳]`, true);

    try {
        const response = await fetch('https://logsystem.vercel.app/api/ocr', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                base64Image: `data:${selectedFile.type};base64,${selectedImageData}`,
                apikey: 'K88205300088957',
                language
            })
        });

        const result = await response.json();
        const text = result.ParsedResults?.[0]?.ParsedText?.trim();

        if (text) {
            userInput.value = cleanMarkdown(text);
            addMessage("Is this the correct text? Please verify it above.", false);
            logToServer(`OCR extracted text in '${language}': ${text}`);
        } else {
            addMessage('OCR could not detect any readable text in the image.', false);
            logToServer('OCR failed to detect text in image.');
        }
    } catch (error) {
        console.error('OCR Error:', error);
        addMessage('There was an error while processing the image.', false);
        logToServer(`OCR error: ${error.message}`);
    }
}

const confirmLangButton = document.getElementById('confirm-language');
confirmLangButton.addEventListener('click', () => {
    const langInput = document.getElementById('language-input').value.trim().toLowerCase();
    const langCode = languageMap[langInput] || langInput;
    document.getElementById('language-modal').style.display = 'none';

    if (!selectedImageData || !selectedFile) return;

    processOCR(langCode);
});
