export function classify(s) {
    return s.replace(/\W+/g, '-').toLowerCase();
}