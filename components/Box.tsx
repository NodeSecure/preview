interface BoxProps {
  label: string;
  value: string | number;
}

function Box({ label, value }: BoxProps) {
  return (
    <div className="bg-gray-900 text-left p-10 rounded-lg shadow-2xl mr-2">
      <h4 className="text-xl text-gray-200 font-light mb-2">{label}:</h4>
      <p className="text-3xl text-gray-300 font-bold">{value}</p>
    </div>
  );
}

export default Box;
