"use client";

import { useState } from "react";
import AsideMenu from "./components/asideMenu/AsideMenu";
import ButtonContact from "./components/buttonContact/ButtonContact";
import FooterContact from "./components/footerContact/FooterContact";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Table from "./components/table/Table";
import useSWR from "swr";
import { saveAs } from "file-saver";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Home() {
  const { data } = useSWR("/api/data.json", fetcher);
  const [base, setBase] = useState([]);

  function getData() {
    setBase(data);
  }

  function downloadData() {
    let fileData = {};
    fileData = base;
    const jsonString = JSON.stringify(fileData);

    const blob = new Blob([jsonString], { type: "text/plain" });
    saveAs(blob, "data.json");
  }

  return (
    <div className="container m-auto flex flex-row items-start gap-5 p-3">
      <div className="flex w-80 flex-shrink-0 flex-col gap-1">
        <AsideMenu />
        <FooterContact />
        <ButtonContact />
      </div>
      <div className="w-full">
        <div className="mb-12">
          <Header />
        </div>
        <div className="mb-4 flex items-center gap-4 text-2xl">
          Остатки сформированы на 01.04.2023 г.
          <div className="inline-flex items-center gap-1 rounded-3xl bg-gray-700 p-2 text-sm text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-journal-code"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708"
              />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
            </svg>
            Инструкции
          </div>
        </div>
        <div className="mb-2 flex gap-3 md:flex-wrap">
          <Input label="Баркод" placeholder="5434654767657578" />
          <Input label="Артикул" placeholder="ДжЖСинМом0823" />
          <div className="w-36">
            <Input label="Размер" placeholder="44" />
          </div>
          <div className="inline-flex flex-col items-start gap-2 rounded-lg bg-white px-2 py-1">
            <div className="text-sm text-gray-300">Категория</div>
            <select name="category" id="" className="text-sm">
              <option value="джинсы">Джинсы</option>
              <option value="брюки">Брюки</option>
            </select>
          </div>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <div className="inline-flex cursor-pointer rounded-3xl bg-blue-400 p-2 py-1 text-sm text-white">
            Сформировать
          </div>
          <div
            onClick={downloadData}
            className="inline-flex cursor-pointer items-center gap-1 rounded-3xl bg-blue-900 p-2 py-1 text-sm text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-cloud-upload"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"
              />
              <path
                fillRule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
              />
            </svg>
            Экспорт
          </div>
        </div>
        <div className="mb-5 flex justify-between border-b border-t border-gray-500 py-2">
          <div className="flex items-center gap-5">
            <div
              className="flex cursor-pointer items-center gap-1"
              onClick={getData}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-folder-symlink-fill"
                viewBox="0 0 16 16"
              >
                <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3M2.19 3q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742" />
              </svg>
              Загрузить данные из csv
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-folder-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
              </svg>
              Изменить данные
            </div>
          </div>
          <div
            className="flex cursor-pointer items-center gap-2 border-l border-gray-500 pl-6"
            onClick={() => setBase([])}
          >
            Очистить
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-x cursor-pointer hover:text-blue-600"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </div>
        <Table data={base} />
      </div>
    </div>
  );
}
