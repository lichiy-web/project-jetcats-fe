import { useSearchParams } from 'react-router-dom';
import css from './Paginator.module.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const defaultPage = 1;
const defaultPerPage = 20;

const Paginator = ({
  page,
  perPage,
  totalPages
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = searchParams.get('page') || page || defaultPage;
  const activePerPage =
    searchParams.get('perPage') || perPage || defaultPerPage;
  // Функція оновлення певного ключа
  const updateSearchParams = (key, value) => {
    // 1. Копіюємо існуючі параметри
    const updatedParams = new URLSearchParams(searchParams);
    // 2. Оновлюємо певний ключ
    updatedParams.set(key, value);
    // 3. Застосовуємо зміни до URL
    setSearchParams(updatedParams, {
      preventScrollReset: true,
    });
  };
  updateSearchParams('page', activePage);
  updateSearchParams('perPage', activePerPage);

  const handleChange = (e, page) => {
    console.log({ e, page });
  };
  return (
    <div className={css.paginatorContainer}>
      <Stack spacing={2}>
        <Pagination count={totalPages} color="primary" onChange={handleChange} />
      </Stack>
    </div>
  );
};
export default Paginator;
