export const formtDuration = (ms: string) => {
    const minutes = Math.floor(parseInt(ms) / 60000);
    const seconds = Math.floor((parseInt(ms) % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
