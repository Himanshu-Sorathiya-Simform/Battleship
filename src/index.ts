import { elements } from './elements.js';
import type { User } from './types.js';
import { generateBlocks } from './utils/helpers.js';

const user1: User = 'player1';
const user2: User = 'player2';
const player2 = false;

(elements['player1BlocksArea'] as HTMLElement).append(...generateBlocks(user1));
(elements['player2BlocksArea'] as HTMLElement).append(...generateBlocks(user2, player2));
