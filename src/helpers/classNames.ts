export function classNames(...args: (string | undefined) []): string {
    const result = args.filter(arg => arg !== undefined)
    return result.join(' ');
}
