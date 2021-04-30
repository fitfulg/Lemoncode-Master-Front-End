function changeCase(s: string): string {
    return s.split('')
      .map((letra: string) => letra === letra.toUpperCase() ? letra.toLowerCase() : letra.toUpperCase())
      .join('');
  }

console.log(changeCase("hOLA lEMONCODE")) 


