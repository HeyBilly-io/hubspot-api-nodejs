export default function get<T, Path extends string | string[], Default = any>(o: T, path: Path, defaultValue?: Default): T | Default | undefined;
