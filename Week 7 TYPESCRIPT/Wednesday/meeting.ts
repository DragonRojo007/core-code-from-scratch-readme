export function meeting(s: string): string {
    return s
      .toUpperCase()
      .split(';')
      .sort((a: string, b: string) => {
        const [aFirstName, aLastName] = a.split(':');
        const [bFirstName, bLastName] = b.split(':');
        if (aLastName === bLastName) {
          return aFirstName > bFirstName ? 1 : bFirstName > aFirstName ? -1 : 0;
        }
        return aLastName > bLastName ? 1 : bLastName > aLastName ? -1 : 0;
      })
      .map((fullName: string) => {
        const [firstName, lastName] = fullName.split(':');
        return `(${lastName}, ${firstName})`;
      })
      .join('');
  }