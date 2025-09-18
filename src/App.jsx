import "./App.css";
import { useState } from "react";
import { useNote } from "./zustand/useNote";
import { Form } from "antd";
import Sidebar from "./components/Sidebar";
import NoteView from "./components/NoteView";
import NoteModal from "./components/NoteModal";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [read, setRead] = useState(null);
  const [form] = Form.useForm();
  const { notes, setNote, deleteNote, updateNote } = useNote();
  const [editId, setEditId] = useState(null);

  const handleClose = () => {
    setOpenModal(false);
    form.resetFields();
    setEditId(null);
  };

  const createNote = (values) => {
    values.id = crypto.randomUUID();
    values.date = new Date();
    setNote(values);
    handleClose();
  };

  const removeNote = (id) => {
    deleteNote(id);
    setRead(null);
  };

  const editNote = (read) => {
    setOpenModal(true);
    form.setFieldsValue(read);
    setEditId(read.id);
  };

  const saveNote = (values) => {
    values.date = new Date();
    updateNote(editId, values);
    setRead(values);
    handleClose();
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-purple-50 to-pink-100">
        <Sidebar notes={notes} setRead={setRead} setOpenModal={setOpenModal} />
        <NoteView read={read} editNote={editNote} removeNote={removeNote} />
        <NoteModal
          openModal={openModal}
          handleClose={handleClose}
          editId={editId}
          saveNote={saveNote}
          createNote={createNote}
          form={form}
        />
      </div>
    </>
  );
}

export default App;
