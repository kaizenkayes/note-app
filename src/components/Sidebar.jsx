import { File, Plus } from "lucide-react";
import moment from "moment";

export default function Sidebar({ notes, setRead, setOpenModal }) {
  return (
    <aside className="overflow-auto pt-12 space-y-6 p-4 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 fixed top-0 left-0 w-[300px] h-full shadow-xl">
      <div className="bg-white/90 backdrop-blur-md space-y-4 p-4 rounded-2xl shadow-lg">
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8">
            <File className="w-10 h-10 text-gray-400 mb-3" />
            <span className="text-lg font-semibold text-gray-600">
              Add A Plan
            </span>
            <span className="text-xs text-gray-400 mt-1 text-center">
              No notes found. Click "New File" to create one!
            </span>
          </div>
        ) : (
          notes.map((item, index) => (
            <button
              onClick={() => setRead(item)}
              key={index}
              className="flex items-center gap-2 px-2 py-3 w-full rounded-xl hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 duration-300"
            >
              <File className="w-6 h-6 text-purple-500" />
              <div className="flex flex-col">
                <label className="font-medium text-left capitalize text-gray-800">
                  {item.filename}
                </label>
                <label className="text-xs text-gray-500 font-semibold">
                  {moment(item.date).format("DD MMMM YYYY , hh:mm A")}
                </label>
              </div>
            </button>
          ))
        )}
      </div>

      <button
        onClick={() => setOpenModal(true)}
        className="flex gap-2 w-full justify-center items-center p-4 text-white font-medium rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-md hover:shadow-xl hover:scale-105 transition-transform"
      >
        <Plus className="w-5 h-5" />
        New File
      </button>
    </aside>
  );
}
