type SignatureProps = {
  name: string;
  role?: string;
};

export function Signature({ name, role }: SignatureProps) {
  return (
    <div className="mt-12 flex items-baseline gap-6 border-t border-rule pt-8">
      <span className="font-script text-[54px] leading-none text-olive">
        {name}
      </span>
      {role ? (
        <span className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
          {role}
        </span>
      ) : null}
    </div>
  );
}
