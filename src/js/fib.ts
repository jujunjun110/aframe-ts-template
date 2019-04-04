export default class Fib {
  static fib(num: number): number {
    function fib_inner(counter: number, p1: number, p2: number): number {
      return counter === 0 ? p1 : fib_inner(counter - 1, p1 + p2, p1)
    }
    return fib_inner(num, 0, 1)
  }
}
