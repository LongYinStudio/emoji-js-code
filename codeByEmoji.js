const emojiMapping = {
    '#️⃣': 'let',
    '👉': '=',
    '🔚': ';',
    '▶️': '(`',
    '◀️': '`)',
    '📢': 'console.log',
    '⚠️': 'console.warn',
    '🈲': 'console.error',
    '⏪': '${',
    '⏩': '}',
}

function codeByEmoji(text) {
    try {
        const code = Object.entries(emojiMapping).reduce((acc, [emoji, mapping]) => {
            const regex = new RegExp(emoji, 'g');
            return acc.replace(regex, mapping);
        }, text);
        return Function(code)();
    } catch (error) {
        console.error(error);
        return null;
    }
}