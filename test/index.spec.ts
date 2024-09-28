import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("test", () => {
  it("¯\\_(ツ)_/¯ ", async () => {
    const req = await SELF.fetch("https://example.com/");
    const body: { hello: string } = await req.json();
    expect(body.hello).eq("kitty");
  });
});
