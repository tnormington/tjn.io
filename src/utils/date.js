export function formatDate(date) {
    const moment = require('moment');
    const d = moment(date);
    return d.fromNow();
}