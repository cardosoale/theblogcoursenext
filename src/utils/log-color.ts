import { styleText } from 'util';

export function logColor(...msg: (string | number)[]) {
  const messages = msg
    .map(message => styleText(['bgBlack', 'greenBright'], `${message}`))
    .join();
  console.log(styleText('black', messages));
}
