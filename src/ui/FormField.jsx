export default function FormField({
  label,
  type,
  placeholder,
  onChange,
  name,
  value,
  error,
}) {
  return (
    <div className="flex w-110 flex-col">
      <label className="font-bold text-gray-600">{label}</label>
      <input
        name={name.toLowerCase()}
        type={type}
        placeholder={placeholder}
        value={value}
        className="bg-primary-dark my-4 rounded-md px-2 py-2 outline-0"
        onChange={onChange}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
