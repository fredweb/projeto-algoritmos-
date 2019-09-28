export function minMaxbad(v: Number[], n: Number) {
  let max: Number = v[0];
  let min: Number = v[0];
  for (let i = 1; i < n; i++) {
    if (v[i] > max) max = v[i];
    if (v[i] < min) min = v[i];
  }
  const maxMin = new Array();
  maxMin.push(max);
  maxMin.push(min);
  return maxMin;
}

export function minMaxGood(v: Number[], n: Number) {
  let max: Number = v[0];
  let min: Number = v[0];
  for (let i = 1; i < n; i++) {
    if (v[i] > max) max = v[i];
    else if (v[i] < min) min = v[i];
  }
  const maxMin = new Array();
  maxMin.push(max);
  maxMin.push(min);
  return maxMin;
}

export function minMaxVeryGood(v: number[], n: number) {
  let max, min, endRing: number;
  if (n % 2 > 0) {
    v[0] = v[n - 1];
    endRing = n;
  } else {
    endRing = n - 1;
  }
  if (v[0] > v[1]) {
    max = v[0];
    min = v[1];
  } else {
    max = v[1];
    min = v[0];
  }
  let i: number = 1;

  while (i < endRing) {
    if (v[i] > v[i + 1]) {
      if (v[i] > max) max = v[i];
      if (v[i] < min) min = v[i];
    } else {
      if (v[i] < min) min = v[i];
      if (v[i + 1] > max) max = v[i + 1];
    }
    i = i + 2;
  }

  const maxMin: any[] = [max, min];

  return maxMin;
}
