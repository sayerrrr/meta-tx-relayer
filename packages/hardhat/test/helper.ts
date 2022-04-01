import { assert } from "chai";

export const tryCatchRevert = async (promise: Promise<any>, message: string, ignoreMessage = false) => {
  let headMsg = "revert ";
  if (message === "") {
    headMsg = headMsg.slice(0, headMsg.length - 1);
    if (!ignoreMessage) {
      console.warn(
        "    \u001b[93m\u001b[2m\u001b[1m⬐ Warning:\u001b[0m\u001b[30m\u001b[1m There is an empty revert/require message",
      );
    }
  }
  try {
    if (promise instanceof Function) {
      await promise();
    } else {
      await promise;
    }
  } catch (error: any) {
    assert(
      error.message.search(headMsg + message) >= 0 || process.env.SOLIDITY_COVERAGE,
      "Expected a revert '" + headMsg + message + "', got " + error.message + "' instead",
    );
    return;
  }
  assert.fail("Expected throw not received");
};
