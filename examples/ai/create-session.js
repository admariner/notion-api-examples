const { notion, yargs } = require('../shared');
const { hideBin } = require('yargs/helpers');

const argv = yargs.option('agentId', {
  alias: 'a',
  describe: 'The ID of the block to move',
  demand: true,
  default: '3d51c1cce3f380f8bdd200927562938f',
}).argv;

(async () => {
  const message = argv._.join(' ');

  const params = {
    agent_id: argv.agentId,
    message,
  };
  const session = await notion.sessions.update(params);
  console.log(session);
})();
