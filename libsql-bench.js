import { run, bench, group, baseline } from 'mitata';
import { createClient } from "@libsql/client";

const client = createClient({
  url: ":memory:",
});

bench('query', async () => {
    await client.execute("select 'Hello world' as message;");
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
