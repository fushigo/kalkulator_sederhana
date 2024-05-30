import { TextView } from "@/components/elements/text_view";

const TextField = ({ input, value }: { input: string; value: string }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-end gap-2">
      <div className="font-bold">
        <TextView text={input} />
      </div>
      <div className="text-slate-400">
        <TextView text={value.toString()} />
      </div>
    </div>
  );
};

export default TextField;
