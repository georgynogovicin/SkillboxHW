export function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

/* 
const filterWithId = (id: number) => pipe(pick("id"), isEqual(id), cond)
const comments = [{id: 22, text: "123"}, {id: 12, text: "qwe"}];

const filtered = comments.filter(pipe(pick("id"), isEqual(22), cond))
const filteredWithId = comments.filter(filterWithId(22))

 */