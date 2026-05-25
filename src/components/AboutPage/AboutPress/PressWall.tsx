type PressWallProps = {
  publications?: string[];
};

export function PressWall({ publications }: PressWallProps) {
  if (!publications?.length) return null;

  return (
    <div className="grid grid-cols-2 border border-rule">
      {publications.map((name) => (
        <div
          key={name}
          className="flex items-center justify-center border-b border-r border-rule px-6 py-8 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0"
        >
          <span className="font-serif text-[clamp(22px,2.4vw,32px)] italic leading-none text-olive opacity-[0.85]">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
