import React from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './QuillToolbar';
import logoSend from '../images/send.svg';
import { useDispatch } from 'react-redux';
import { newDataBerita } from '../features/news/news';

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const [judul, setJudul] = React.useState('');
  const [images, setImages] = React.useState('');
  const [message, setMessage] = React.useState('');

  const dispatch = useDispatch();
  const handleChange = (value) => {
    setState({ value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0].name;
    setImages(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      records: [
        {
          fields: {
            title: judul,
            images: [
              {
                url: images,
              },
            ],
            description: state.value,
          },
        },
      ],
    };

    dispatch(newDataBerita(newData));
  };

  return (
    <div className="text-editor mt-5 bg-white p-10 overflow-auto">
      <div className="w-full flex justify-between relative ">
        <input type="text" className="border w-full border-t-0 border-x-0 focus:outline-none focus:ring-0 border-darkGreen" placeholder="Judul..." onChange={(e) => setJudul(e.target.value)} />

        <button type="submit" onClick={handleSubmit} className="bg-lightGreen px-5 py-2 -mt-2 text-white absolute right-0 rounded-full flex items-center gap-3">
          <img src={logoSend} alt="" className="w-4" />
          Publikasikan
        </button>
      </div>

      <input type="file" accept="image/png, image/gif, image/jpeg" className="my-5" onChange={handleImageChange} />

      <EditorToolbar />
      <ReactQuill theme="snow" value={state.value} onChange={handleChange} placeholder={'Isi konten artikel...'} modules={modules} formats={formats} className="border-none h-full" />
    </div>
  );
};

export default Editor;
