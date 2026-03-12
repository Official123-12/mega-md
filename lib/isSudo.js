const fs = require('fs');
const path = require('path');

/**
 * Check if a user is in sudo list
 * @param {string} userId - JID ya user
 * @returns {Promise<boolean>}
 */
async function isSudo(userId) {
    try {
        const sudoPath = path.join(__dirname, '../data/sudo.json');
        if (!fs.existsSync(sudoPath)) {
            // Create default sudo.json if not exists
            fs.writeFileSync(sudoPath, JSON.stringify({ sudo: [] }, null, 2));
            return false;
        }
        const data = JSON.parse(fs.readFileSync(sudoPath, 'utf-8'));
        return data.sudo.includes(userId) || data.sudo.includes(userId.split('@')[0]);
    } catch (e) {
        console.error('Error checking sudo:', e.message);
        return false;
    }
}

module.exports = { isSudo };