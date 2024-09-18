interface TableProps {
  data:
    | [
        {
          barcode: number;
          type: string;
          art: string;
          size: string;
          inStock: number;
          inTransit: number;
          total: number;
        },
      ]
    | never[];
}

export default function Table({ data }: TableProps) {
  return (
    <table className="min-w-full border-separate border-spacing-1 rounded-xl bg-white p-4">
      <thead>
        <tr className="*:py-2 *:text-xs">
          <th>
            <div
              onClick={() => data.sort((a, b) => a.barcode - b.barcode)}
              className="flex cursor-pointer items-center gap-1"
            >
              Баркод
              <Arrow />
            </div>
          </th>
          <th>
            <div className="flex items-center gap-1">
              Предмет
              <Arrow />
            </div>
          </th>
          <th>
            <div className="flex items-center gap-1">
              Артикул поставщика
              <Arrow />
            </div>
          </th>
          <th>
            <div className="flex items-center gap-1">
              Размер
              <Arrow />
            </div>
          </th>
          <th>
            <div className="flex items-center gap-1">
              Доступно к заказу
              <Arrow />
            </div>
          </th>
          <th>
            <div className="flex items-center gap-1">
              Товары в пути
              <Arrow />
            </div>
          </th>
          <th>
            <div
              onClick={() => {
                data.sort((a, b) => a.total - b.total);
              }}
              className="flex cursor-pointer items-center gap-1"
            >
              Итого кол-во товаров
              <Arrow />
            </div>
          </th>
        </tr>
      </thead>
      {data.length == 0 ? (
        <NoData />
      ) : (
        <>
          <tbody>
            {data?.map((item, i) => {
              return (
                <tr
                  className="bg-gray-200 *:px-1 *:py-3 even:bg-gray-50"
                  key={i}
                >
                  <td className="rounded-bl-md rounded-tl-md">
                    {item.barcode}
                  </td>
                  <td>{item.type}</td>
                  <td>{item.art}</td>
                  <td>{item.size}</td>
                  <td>{item.inStock}</td>
                  <td>{item.inTransit}</td>
                  <td className="rounded-br-md rounded-tr-md">{item.total}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 *:px-1 *:py-3">
              <td className="rounded-bl-md rounded-tl-md">Итого</td>
              <td colSpan={6} className="rounded-br-md rounded-tr-md text-end">
                {data?.reduce((acc, item) => acc + item.total, 0)}
              </td>
            </tr>
          </tfoot>
        </>
      )}
    </table>
  );
}

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="bi bi-caret-down-fill text-blue-500"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );
}

function NoData() {
  return (
    <tbody>
      <tr>
        <td colSpan={7} className="py-5 text-center font-bold">
          Загрузите данные из CSV
        </td>
      </tr>
    </tbody>
  );
}
