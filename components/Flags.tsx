interface FlagProp {
  type: string
}

// TODO: move that to the backend and use
// https://github.com/NodeSecure/flags/blob/main/src/manifest.js
const flagMap = {
  "hasIndirectDependencies": "🌲 - Indirect dependencies",
  "hasOutdatedDependency": "⛔️ - Outdates dependencies",
  "hasMissingOrUnusedDependency": "👀 - Missing or updated dependencies"
}

function Flags ({ type }: FlagProp) {
  // @ts-expect-error
  const label = flagMap[type];

  if (label) {
    return (
      <div className="rounded py-2 px-4 bg-gray-900 text-gray-200 mb-2">
        {label}
      </div>
    )
  }

  return null;
}

export default Flags;
