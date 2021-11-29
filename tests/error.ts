import * as assert from "assert";
import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Error } from "../target/types/error";

describe("error", () => {
  const provider = anchor.Provider.local();
  // Configure the client to use the local cluster.
  anchor.setProvider(provider);

  const program = anchor.workspace.Error as Program<Error>;

  it("Is initialized!", async () => {
    try {
      // Add your test here.
      const tx = await program.rpc.hello({});
      console.log("Your transaction signature", tx);
      assert.ok(false);
    } catch (err) {
      const errMsg =
        "This is an error message clients will automatically display";
      assert.equal(err.toString(), errMsg);
      console.log(err.toString());
    }
  });
});
