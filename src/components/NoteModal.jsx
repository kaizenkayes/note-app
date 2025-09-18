import { Modal, Form, Input, Button } from "antd";

export default function NoteModal({
  openModal,
  handleClose,
  editId,
  saveNote,
  createNote,
  form,
}) {
  return (
    <Modal
      open={openModal}
      onCancel={handleClose}
      footer={null}
      width={"70%"}
      maskClosable={false}
    >
      <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
        {editId ? "Edit File" : "Create New File"}
      </h1>

      <Form
        layout="vertical"
        onFinish={editId ? saveNote : createNote}
        form={form}
      >
        <Form.Item
          label="FileName : "
          name="filename"
          rules={[{ required: true }]}
        >
          <Input
            size="large"
            placeholder="Enter File Name"
            className="rounded-lg border-gray-300 focus:ring-2 focus:ring-pink-400"
          />
        </Form.Item>

        <Form.Item
          label="Content : "
          name="content"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            size="large"
            placeholder="Content Goes Here..."
            rows={10}
            className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-400"
          />
        </Form.Item>

        <Form.Item>
          {editId ? (
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-transform"
            >
              Save
            </Button>
          ) : (
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:scale-105 transition-transform"
            >
              Submit
            </Button>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
}
