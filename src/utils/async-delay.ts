import { logColor } from './log-color';

export async function asyncDelay(
  milliseconds: number,
  verbose: boolean = false,
) {
  if (milliseconds <= 0) return;

  if (verbose) {
    logColor(`Delaying for ${milliseconds / 1000}s`);
  }

  await new Promise(resolve => setTimeout(resolve, milliseconds));
}
