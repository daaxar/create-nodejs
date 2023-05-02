import { now } from '@daaxar/time';
import { lang } from './enum';

const { log } = console;

const text: string = `Esto es un proyecto ${lang.TS}`;
export const logger = () => log(now(), text);
