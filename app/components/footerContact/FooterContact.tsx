import Link from "next/link";

export default function FooterContact() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-xl bg-black p-4 text-white">
      <div className="">Техническая поддержка</div>
      <div className="grid grid-flow-col grid-cols-2 gap-4">
        <div className="">
          <div className="text-[9px] text-gray-500">Номер поддержки:</div>
          <a className="text-nowrap text-xs" href="tel:+79999999999">
            8 (999) 999 99 99
          </a>
        </div>
        <div className="">
          <div className="text-[9px] text-gray-500">Почта поддержки:</div>
          <a className="text-sm" href="mailto:pf1@werthesest.ru">
            pf1@werthesest.ru
          </a>
        </div>
      </div>
      <div className="">
        <div className="text-xs text-gray-500">Часы работы:</div>
        <div className="">Пн - Пт с 9:00 до 19:00 мск</div>
      </div>
      <div className="flex flex-col gap-1 text-xs text-gray-500">
        <Link className="border-b border-gray-500 pb-1" href={"#"}>
          Пользовательское соглашение
        </Link>
        <Link className="border-b border-gray-500 pb-1" href={"#"}>
          Политика конфиденциальности
        </Link>
        <Link className="border-b border-gray-500 pb-1" href={"#"}>
          Юридическая информация
        </Link>
        <Link href={"#"}>Публичная оферта</Link>
      </div>
    </div>
  );
}
