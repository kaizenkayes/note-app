import { Edit2, Trash2 } from "lucide-react";
import moment from "moment";
import { Empty } from "antd";

export default function NoteView({ read, editNote, removeNote }) {
  return (
    <section className="ml-[300px] p-12">
      {read ? (
        <div className="bg-white/90 backdrop-blur-md w-11/12 mx-auto rounded-2xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold capitalize text-gray-800">
                {read.filename}
              </h1>
              <label className="text-sm text-gray-500 font-medium">
                {moment(read.date).format("DD MMMM YYYY , hh:mm A")}
              </label>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => editNote(read)}
                className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg p-2 cursor-pointer text-white shadow hover:scale-110 transition-transform"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => removeNote(read.id)}
                className="bg-gradient-to-r from-red-400 to-pink-500 rounded-lg p-2 cursor-pointer text-white shadow hover:scale-110 transition-transform"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-700 font-medium leading-relaxed">
              {read.content}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white/90 backdrop-blur-md w-11/12 mx-auto rounded-2xl flex p-16 justify-center items-center shadow-md">
          <Empty description="Choose A File To Read" />
        </div>
      )}
    </section>
  );
}
