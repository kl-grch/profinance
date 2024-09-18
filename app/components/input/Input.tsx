interface InputProps {
  label: string;
  placeholder: string;
}

export default function Input({ label, placeholder }: InputProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white px-2 py-1">
      <div className="">{label}</div>
      <input
        type="text"
        className="rounded-lg bg-gray-100 px-2 py-3 w-full"
        placeholder={placeholder}
      />
    </div>
  );
}
