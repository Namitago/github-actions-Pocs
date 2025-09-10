const core = require("@actions/core");

async function run() {
  try {
    const name = core.getInput("name");
    console.log(`👋 Hello, ${name} from JavaScript Action!`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
