import React from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './QuillToolbar';
import logoSend from '../../images/send.svg';

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div className="text-editor mt-5 bg-white p-10">
      <div className="w-full  mb-5 flex justify-between relative">
        <input type="text" className="border w-full border-t-0 border-x-0 focus:outline-none focus:ring-0 border-darkGreen" placeholder="Judul..." />

        <button className="bg-lightGreen px-5 py-2 -mt-2 text-white absolute right-0 rounded-full flex items-center gap-3">
          <img src={logoSend} alt="" className="w-4" />
          Publikasikan
        </button>
      </div>

      <EditorToolbar />
      <ReactQuill theme="snow" value={state.value} onChange={handleChange} placeholder={'Isi konten artikel...'} modules={modules} formats={formats} className="border-none" />
    </div>
  );
};

export default Editor;
