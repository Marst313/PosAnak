import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './QuillToolbar';
import { useDispatch, useSelector } from 'react-redux';
import { getDataBerita, newDataBerita, updateDataBerita } from '../features/news/news';
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const DEFAULT_IMAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/posyandu2-893b0.appspot.com/o/default.png?alt=media';

const Editor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, edit, singleDataBerita } = useSelector((store) => store.news);

  const [state, setState] = useState({ value: null });
  const [images, setImages] = useState(null);
  const [judul, setJudul] = useState('');

  useEffect(() => {
    if (edit) {
      setJudul(singleDataBerita.title);
      setState({ value: singleDataBerita.description });
      setImages(singleDataBerita.images);
    }
  }, [edit, singleDataBerita]);

  const handleChange = (value) => {
    setState({ value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages(file);
  };

  const uploadImageAndGetUrl = async (imageFile) => {
    const imageRef = ref(storage, `images/${imageFile.name + uuidv4()}`);
    await uploadBytes(imageRef, imageFile);
    return await getDownloadURL(imageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl;
    if (images instanceof File) {
      imageUrl = await uploadImageAndGetUrl(images);
    } else {
      imageUrl = images; // This will be the existing image URL or null
    }

    const beritaData = {
      title: judul,
      images: imageUrl || DEFAULT_IMAGE_URL, // Use default image URL if no image is provided
      description: state.value,
    };

    console.log(beritaData);

    if (edit) {
      beritaData.id = singleDataBerita._id;
      await dispatch(updateDataBerita(beritaData));
    } else {
      await dispatch(newDataBerita(beritaData));
    }

    await dispatch(getDataBerita());
    navigate('/dashboard/databerita');
  };

  return (
    <div className="text-editor lg:mt-5 bg-white p-10 overflow-auto">
      <div className="w-full mt-10 flex justify-between relative">
        <input type="text" className="border w-full border-t-0 border-x-0 focus:outline-none focus:ring-0 border-darkGreen" placeholder="Judul..." value={judul || ''} onChange={(e) => setJudul(e.target.value)} />
        <button
          type="submit"
          onClick={handleSubmit}
          className={`bg-lightGreen px-5 py-2 -mt-2 text-white absolute right-0 rounded-full flex items-center gap-3 hover:bg-white border border-greenPrimary hover:text-greenPrimary transition-all`}
          disabled={isLoading}
        >
          <svg className="fill-greenPrimary hover:fill-greenPrimary" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.0937 7.34489L8.68035 1.63823C1.01369 -2.20177 -2.13298 0.944893 1.70702 8.61156L2.86702 10.9316C3.20035 11.6116 3.20035 12.3982 2.86702 13.0782L1.70702 15.3849C-2.13298 23.0516 1.00035 26.1982 8.68035 22.3582L20.0937 16.6516C25.2137 14.0916 25.2137 9.90489 20.0937 7.34489ZM15.787 12.9982H8.58702C8.04035 12.9982 7.58702 12.5449 7.58702 11.9982C7.58702 11.4516 8.04035 10.9982 8.58702 10.9982H15.787C16.3337 10.9982 16.787 11.4516 16.787 11.9982C16.787 12.5449 16.3337 12.9982 15.787 12.9982Z"
              fill="currentColor"
            />
          </svg>
          {isLoading ? 'Loading...' : edit ? 'Update' : 'Publikasikan'}
        </button>
      </div>

      <input type="file" accept="image/png, image/gif, image/jpeg" className="my-5" onChange={handleImageChange} />

      <EditorToolbar />
      <ReactQuill theme="snow" value={state.value || ''} onChange={handleChange} placeholder={'Isi konten artikel...'} modules={modules} formats={formats} className="border-none h-full" />
    </div>
  );
};

export default Editor;
