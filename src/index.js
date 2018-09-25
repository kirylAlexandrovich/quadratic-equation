module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g, "");
  const x2split = equation.split('*x^2');
  const xsplit = x2split[1].split('*x'); 
  
  const getRoots = (a, b, c) => {
    const discriminant = Math.sqrt(b * b - 4 * a * c);
    const coefficient = 2 * a;
    const root1 = (-b + discriminant) / coefficient;
    const root2 = (-b - discriminant) / coefficient;
    return [root1.toFixed(), root2.toFixed()].sort((a, b) => a - b);
  }

  return getRoots(x2split[0], xsplit[0], xsplit[1]);

}