export type TypeGuard<T> = (val: unknown) => T;

export const boolean: TypeGuard<boolean> = (val: unknown) => {
    if (typeof val !== 'boolean') throw new Error();
    return val;
}

export const string: TypeGuard<string> = (val: unknown) => {
    if (typeof val !== 'string') throw new Error();
    return val;
}

export const number: TypeGuard<number> = (val: unknown) => {
    if (typeof val !== 'number') throw new Error();
    return val;
}

export const array = <T>(inner: TypeGuard<T>) => (val: unknown): T[] => {
    if (!Array.isArray(val)) throw new Error();
    return val.map(inner);
}

export const object = <T extends Record<string, TypeGuard<any>>>(inner: T) => {
    return (val: unknown): { [P in keyof T]: ReturnType<T[P]> } => {
        if (val === null || typeof val !== 'object') throw new Error();

        const out: { [P in keyof T]: ReturnType<T[P]> } = {} as any;

        for (const k in inner) {
            out[k] = inner[k]((val as any)[k])
        }

        return out
    }
}