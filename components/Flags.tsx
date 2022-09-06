import { FlagObject } from "@nodesecure/flags/web";

type FlagItem = [FlagObject["title"], FlagObject["tooltipDescription"]];

interface FlagsProp {
  flags: FlagItem[];
}

function Flags({ flags }: FlagsProp) {
  return (
    <>
      <h3 className="px-10 text-2xl font-bold text-gray-200 mb-6">Flags:</h3>
      <div className="flex gap-2 text-gray-200 px-10">
        {flags.map(([emoji, tooltip]: FlagItem) => (
          <Flag key={emoji} emoji={emoji} tooltip={tooltip} />
        ))}
      </div>
    </>
  );
}

export default Flags;

interface FlagProp {
  emoji: FlagObject["title"];
  tooltip: FlagObject["tooltipDescription"];
}

function Flag({ emoji, tooltip }: FlagProp) {
  return (
    <div
      className="rounded py-2 px-4 bg-gray-900 text-gray-200 mb-2"
      title={tooltip}
    >
      {emoji}
    </div>
  );
}
