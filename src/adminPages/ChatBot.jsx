import React from "react";
import { arrowLeft, iconChatBotBook, editChat } from "../images/icons";
import { useNavigate } from "react-router-dom";
import logoWhite from "../images/logoWhite.png";
import defaultProfile from "../images/defaultProfile.png";

const ChatBot = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-bgChatBot flex h-screen p-10 text-white">
      <aside className="flex w-[30%] flex-col">
        {/* Header ASIDE */}
        <div className="flex items-center justify-start gap-10">
          <button onClick={handleClickBack}>
            <img src={arrowLeft} alt="back icon" />
          </button>

          <div className="flex items-center gap-5">
            <img src={logoWhite} alt="logo putih" />
            <h1 className="text-3xl text-white">Posanak</h1>
          </div>

          <img src={iconChatBotBook} alt="logo buku" />
        </div>
        {/* Header ASIDE */}
      </aside>

      {/* Content */}
      <div className="bg-darkGreen flex w-full rounded-3xl">
        <div className="flex w-3/4 flex-col overflow-y-auto">
          {/* HEADER CONTENT */}
          <div className="h-24 border-b-2 border-b-black/20 px-12 py-7">
            <h1 className="text-4xl font-semibold text-white">Chatbots</h1>
          </div>
          {/* HEADER CONTENT */}

          {/* CHAT CONTENT */}
          <ul className="flex h-fit w-full flex-col gap-5 border-r-2 border-r-black/20 px-12 pb-20">
            {/* SINGLE CHAT */}
            <li className="flex flex-col gap-5 py-5">
              <div className="bg-bgChatBot flex w-full flex-col gap-5 rounded-3xl p-5">
                <div className="bg-darkGreen flex w-full items-center gap-5 rounded-xl px-5 py-2">
                  <img
                    src={defaultProfile}
                    alt="user images profile"
                    className="h-10 w-10 rounded-full"
                  />
                  <p className="text-white">
                    Apa ciri paling menonjol yang menunjukan anak itu terkena
                    stunting?
                  </p>

                  <img
                    src={editChat}
                    alt="icon edit"
                    className="ml-auto h-7 w-7"
                  />
                </div>

                <p className="text-white">
                  Stunting adalah kondisi di mana pertumbuhan anak terhambat
                  sehingga tinggi badan mereka lebih rendah dari standar
                  usianya. Beberapa ciri yang paling menonjol dari anak yang
                  terkena stunting adalah: Pertumbuhan Tinggi Badan Terhambat:
                  Anak lebih pendek dibandingkan teman-teman seusianya.
                  Perkembangan Fisik yang Lambat: Perkembangan fisik seperti
                  pertumbuhan gigi, perkembangan otot, dan kemampuan motorik
                  cenderung lebih lambat. Wajah Tampak Lebih Muda: Anak mungkin
                  tampak lebih muda dari usianya sebenarnya. Keterlambatan
                  Perkembangan Kognitif: Anak mungkin mengalami kesulitan dalam
                  belajar, berkonsentrasi, dan berprestasi di sekolah. Kesehatan
                  yang Rentan: Anak lebih mudah sakit dan memiliki sistem
                  kekebalan tubuh yang lemah. Gangguan Pertumbuhan: Penurunan
                  berat badan yang signifikan atau kesulitan dalam menambah
                  berat badan sesuai usianya. Jika ada kekhawatiran mengenai
                  stunting pada anak, sebaiknya segera konsultasikan dengan ahli
                  kesehatan untuk mendapatkan diagnosis dan penanganan yang
                  tepat.
                </p>
              </div>

              <div className="flex items-center gap-5">
                <p className="text-white">Baru Saja</p>

                <button className="bg-bgChatBot h-8 w-16 rounded-md">
                  Copy
                </button>
              </div>
            </li>
            {/* SINGLE CHAT */}

            {/* SINGLE CHAT */}
            <li className="flex flex-col gap-5 py-5">
              <div className="bg-bgChatBot flex w-full flex-col gap-5 rounded-3xl p-5">
                <div className="bg-darkGreen flex w-full items-center gap-5 rounded-xl px-5 py-2">
                  <img
                    src={defaultProfile}
                    alt="user images profile"
                    className="h-10 w-10 rounded-full"
                  />
                  <p className="text-white">
                    Apa ciri paling menonjol yang menunjukan anak itu terkena
                    stunting?
                  </p>

                  <img
                    src={editChat}
                    alt="icon edit"
                    className="ml-auto h-7 w-7"
                  />
                </div>

                <p className="text-white">
                  Stunting adalah kondisi di mana pertumbuhan anak terhambat
                  sehingga tinggi badan mereka lebih rendah dari standar
                  usianya. Beberapa ciri yang paling menonjol dari anak yang
                  terkena stunting adalah: Pertumbuhan Tinggi Badan Terhambat:
                  Anak lebih pendek dibandingkan teman-teman seusianya.
                  Perkembangan Fisik yang Lambat: Perkembangan fisik seperti
                  pertumbuhan gigi, perkembangan otot, dan kemampuan motorik
                  cenderung lebih lambat. Wajah Tampak Lebih Muda: Anak mungkin
                  tampak lebih muda dari usianya sebenarnya. Keterlambatan
                  Perkembangan Kognitif: Anak mungkin mengalami kesulitan dalam
                  belajar, berkonsentrasi, dan berprestasi di sekolah. Kesehatan
                  yang Rentan: Anak lebih mudah sakit dan memiliki sistem
                  kekebalan tubuh yang lemah. Gangguan Pertumbuhan: Penurunan
                  berat badan yang signifikan atau kesulitan dalam menambah
                  berat badan sesuai usianya. Jika ada kekhawatiran mengenai
                  stunting pada anak, sebaiknya segera konsultasikan dengan ahli
                  kesehatan untuk mendapatkan diagnosis dan penanganan yang
                  tepat.
                </p>
              </div>

              <div className="flex items-center gap-5">
                <p className="text-white">Baru Saja</p>

                <button className="bg-bgChatBot h-8 w-16 rounded-md">
                  Copy
                </button>
              </div>
            </li>
            {/* SINGLE CHAT */}
          </ul>
          {/* CHAT CONTENT */}
          <div className="fixed bottom-0 left-0 flex h-14 w-full items-center justify-center">
            <input
              type="text"
              placeholder="Kirim pesan ke Chatbot"
              className="bg-darkGreen border-bgChatBot focus:border-bgChatBot h-full w-[54.2%] translate-x-5 rounded-lg border placeholder:text-white focus:ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

//  {/* HISTORY CHAT */}
//  <ul className="w-[25%] px-4 py-2 text-sm">
//  <h1 className="text-white">Chat History</h1>
//  <li></li>
// </ul>
// {/* HISTORY CHAT */}

{
  /* <div className="flex h-24 w-[25%] items-center gap-5 border-b-2 border-b-black/20 px-12 py-7">
            <div>
              <img src="" alt="gambar profile" />
            </div>

            <button className="text-darkGreen rounded-lg bg-white px-5 py-2 font-semibold">
              Share
            </button>
          </div> */
}
