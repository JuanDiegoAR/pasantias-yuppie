export const Rate = ({ count, rate }: { count: number; rate: number }) => {
  const completes = Math.trunc(rate);
  const partial = rate % 1 > 0.2 && rate % 1 <= 0.6;
  const complete = rate % 1 >= 0.7;

  const show = [];
  for (let i = 0; i < completes; i++) {
    show.push("⭐");
  }

  if (partial) show.push("🌟");
  if (complete) show.push("⭐");

  for (let i = show.length; i < 5; i++) {
    show.push("⚪");
  }

  const result = show.join("");

  return (
    <>
      <p>{result}</p>
      <p>
        {rate} ({count})
      </p>
    </>
  );
};
