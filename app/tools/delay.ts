const delay = <T>(callback: T | PromiseLike<T>): Promise<T> => new Promise(
  (resolve) => setTimeout(
    () => resolve(callback),
    100,
  ),
);

export default delay;
