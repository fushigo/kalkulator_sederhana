export const TextView = ({ text }: { text: string }) => {
  return (
    <div className="w-auto h-auto text-2xl">
      <p>{text}</p>
    </div>
  );
};
