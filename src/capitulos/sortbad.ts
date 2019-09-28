export function sortBad(v: number[], n: number) {
  for (let index = 0; index < v.length; index++) {
    let min = index;
    for (let i = 0; i < n; i++) {
      if (v[i] < v[min]) min = i;
    }
    let x = v[min];
    v[min] = v[index];
    v[index] = x;
  }
  return v;
}
