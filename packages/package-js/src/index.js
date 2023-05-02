import { now } from '@daaxar/time';

const { log } = console;
const text = 'Esto es un proyecto JS';

export const logger = () => log(now(), text);
