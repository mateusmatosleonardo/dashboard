interface HeaderContentProps {
  title: string
}

export const HeaderContent = ({ title }: HeaderContentProps) => {
  return (
    <div className="flex items-center w-full h-12 bg-gray-400 px-4 rounded-md">
      <h2 className="text-gray-950">{title}</h2>
    </div>
  );
};