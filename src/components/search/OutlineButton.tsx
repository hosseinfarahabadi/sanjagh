import { OutlineButtonProps } from "types";

const OutlineButton: React.FC<OutlineButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-12 w-full items-center text-black hover:text-slate-100 justify-center  overflow-hidden bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap ">
        جستجوی خدمات 
      </span>
    </button>
  );
};
export default OutlineButton;
