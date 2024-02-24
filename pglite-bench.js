import { run, bench, group, baseline } from 'mitata';
import { PGlite } from "@electric-sql/pglite"

const db = new PGlite();
bench('query', async () => {
    await db.query("select 'Hello world' as message;");
});

await run({
  units: true,
  silent: false,
  avg: true,
  json: false,
  colors: true,
  min_max: true,
  percentiles: true,
});
