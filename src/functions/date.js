export function formatDate(dateStr) {
    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);

    const date = new Date(dateStr);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); // adjust for timezone

    if (date.toDateString() === today.toDateString()) {
        return 'Published today';
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Published yesterday';
    } else {
        // format as dd.mm.yyyy
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0-indexed
        const year = date.getFullYear();
        return `Published ${day}.${month}.${year}`;
    }
}
