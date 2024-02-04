import { Bot } from 'deno';

const run = () => {
   const bot = new Bot('');

   bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));

   bot.on('message', (ctx) => ctx.reply('Got another message!'));

   bot.start();
};

if (import.meta.main) run();
