export const towerBuilder = (nFloors: number): string[] => {
    if (nFloors === 1) return ['*'];
    const tower: string[] = [];
    const maxNumber = 2 * nFloors - 1;
    for (let i = 1; i <= nFloors; i++) {
      tower.push(
        `${' '.repeat(nFloors - i)}${'*'.repeat(2 * i - 1)}${' '.repeat(
          nFloors - i
        )}`
      );
    }
    return tower;
  };