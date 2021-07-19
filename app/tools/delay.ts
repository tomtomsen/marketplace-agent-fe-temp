function delay <T>(cb: T | PromiseLike<T>): Promise<T> {
  return new Promise(
    (resolve) => setTimeout(
      () => resolve(cb),
      2000,
    ),
  );
}

export default delay;
