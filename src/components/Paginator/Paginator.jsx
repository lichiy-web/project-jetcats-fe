import { Link, useSearchParams } from 'react-router-dom';
import css from './Paginator.module.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/transactions/slice';
import { PaginationItem } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const defaultPage = 1;

const Paginator = ({ page, totalPages }) => {
  const [searchParams] = useSearchParams();
  const activePage = Number(searchParams.get('page') || page || defaultPage);

  const dispatch = useDispatch();
  const handleChange = (e, page) => {
    dispatch(setPage(page));
  };
  const isMobile = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767px)',
  });
  const size = isMobile ? 'small' : 'normal';
  return (
    <div className={css.paginatorContainer}>
      <Stack spacing={2}>
        <Pagination
          //   size={(isMobile && 'small') || null}
          size={size}
          count={totalPages}
          onChange={handleChange}
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
