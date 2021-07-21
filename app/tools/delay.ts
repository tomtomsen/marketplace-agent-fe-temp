const delay = <T>(callback: T | PromiseLike<T>): Promise<T> => new Promise(
  (resolve) => setTimeout(
    () => resolve(callback),
    2000,
  ),
);

export default delay;
