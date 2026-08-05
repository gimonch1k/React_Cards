export async function delayFn(delay = 1000) {
  return await new Promise((res) => setTimeout(res, 1000));
}
