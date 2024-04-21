const memoize =
  <T extends (...args: any[]) => any>(fn: T) =>
  () => {
    let cache = {};
    const PRIMITIVES = ["string", "boolean", "number"];
    return (...args: Parameters<T>): ReturnType<T> => {
      // использование generic-типов Parameters и ReturnType
      let cacheParam =
        args.length === 1 && PRIMITIVES.includes(typeof args[0])
          ? args[0]
          : JSON.stringify(args);
      return cacheParam in cache
        ? cache[cacheParam]
        : (cache[cacheParam] = fn(...args));
    };
  };