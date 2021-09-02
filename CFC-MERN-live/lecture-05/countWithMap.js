let line = "we found map so beneficial";

let counts = new Map();

for (const ch of line) {
  if (counts.has(ch)) {
    counts.set();
  } else {
    counts.set(ch, 1);
  }
}
