const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|\n'];

for (let i = 0; i < spin.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spin[i]);
  }, i * 200);
}
