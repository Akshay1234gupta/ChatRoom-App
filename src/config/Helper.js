export function timeAgo(date) {
    const now = new Date();
    const givenDate = new Date(date);
    const seconds = Math.floor((now - givenDate) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    for (const [unit, value] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / value);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return "just now";
}

// Example usage:
console.log(timeAgo("2024-12-28T10:30:00")); // Replace with any date
