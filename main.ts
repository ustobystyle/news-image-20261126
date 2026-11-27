// news-image-20261126 entrypoint (Node 22, stdlib only).
// Emits the pre-rendered 1024x1024 world-news image for Thursday 26 Nov 2026
// to /output/entry.png (or $MAKEFUN_OUTPUT_DIR). Deterministic: the bytes
// written are exactly the bytes of entry.png next to this file, every run.
// 39 stories, 7 regions, all first reported on 26 November 2026.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

async function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const source = resolve(here, "entry.png");
  const data = await readFile(source);

  if (data.length === 0 || !data.subarray(0, 8).equals(PNG_SIG)) {
    throw new Error("entry.png is missing or is not a PNG image");
  }
  if (data.length > 1024 * 1024) {
    throw new Error(`entry.png is ${data.length} bytes, over the 1 MiB cap`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  await mkdir(outDir, { recursive: true });
  const target = join(outDir, "entry.png");
  await writeFile(target, data);
  console.log(`wrote ${target} (${data.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
