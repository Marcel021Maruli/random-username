export const cleanObject = (obj: object) => {
    return Object.entries(obj).reduce(
      (prev:any, [key, val]) => (val === 0 || val === false || val ? ((prev[key] = val), prev) : prev),
      {},
    );
  };
