interface SocialProofProps {
  count: string;
  label: string;
  avatars?: string[];
  showAvatars?: boolean;
}

export function SocialProof({
  count,
  label,
  avatars = [],
  showAvatars = true,
}: SocialProofProps) {
  return (
    <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-2xl shadow-md border border-border/50">
      {/* Count and Label */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-foreground">{count}</span>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>

      {/* Avatar Row */}
      {showAvatars && avatars.length > 0 && (
        <div className="flex items-center -space-x-2">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full border-2 border-white bg-muted overflow-hidden"
              aria-hidden="true"
            >
              <img
                src={avatar}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
