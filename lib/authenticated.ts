export const isAuthenticated = (keyvalue: string) => {
  const letterAndNumbers = [
    1,
    2,
    33,
    343,
    "b",
    "c",
    "s",
    "e",
    "r",
    "we",
    8,
    10,
    7,
  ];

  const getRandomValues = (arr: [string | number], count: number) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomValues = getRandomValues(
    letterAndNumbers as [string | number],
    5
  ); // Pick 5 random values
  const randomUUID = randomValues
    .map((val: string | number) => val.toLocaleString())
    .join("");

  localStorage.setItem("user-key", randomUUID);

  return keyvalue === randomUUID;
};
