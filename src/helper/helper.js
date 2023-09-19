const isWinning = (bord, sign) => {
  if (bord[0] === bord[1] && bord[1] === bord[2] && bord[2] === sign)
    return sign;
  if (bord[3] === bord[4] && bord[4] === bord[5] && bord[5] === sign)
    return sign;
  if (bord[6] === bord[7] && bord[7] === bord[8] && bord[8] === sign)
    return sign;

  if (bord[0] === bord[3] && bord[3] === bord[6] && bord[6] === sign)
    return sign;
  if (bord[1] === bord[4] && bord[4] === bord[7] && bord[7] === sign)
    return sign;
  if (bord[2] === bord[5] && bord[5] === bord[8] && bord[8] === sign)
    return sign;

  if (bord[0] === bord[4] && bord[4] === bord[8] && bord[8] === sign)
    return sign;
  if (bord[6] === bord[4] && bord[4] === bord[2] && bord[2] === sign)
    return sign;

  return "";
};

export default isWinning;
