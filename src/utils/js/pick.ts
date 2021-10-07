// pick selected property from object
export function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop];
}

// pick("value")({value: 1}) => 1