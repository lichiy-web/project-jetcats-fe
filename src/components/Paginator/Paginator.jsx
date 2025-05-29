import { Link, useSearchParams } from 'react-router-dom';
import css from './Paginator.module.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/transactions/slice';
import { PaginationItem } from '@mui/material';

const defaultPage = 1;
const defaultPerPage = 20;

const Paginator = ({ page, perPage, totalPages }) => {
  const [searchParams] = useSearchParams();
  const activePage = Number(searchParams.get('page') || page || defaultPage);
  const activePerPage = Number(
    searchParams.get('perPage') || perPage || defaultPerPage
  );

  console.log({ activePage, activePerPage });

  const dispatch = useDispatch();
  const handleChange = (e, page) => {
    dispatch(setPage(page));
  };
  return (
    <div className={css.paginatorContainer}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          //   backgroundColor="#508f8c"
          onChange={handleChange}
          //   classes={{ button: css.paginatorItem }}\
          page={activePage}
          renderItem={item => (
            <PaginationItem
              component={Link}
              to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};
export default Paginator;
