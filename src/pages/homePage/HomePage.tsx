import React, { ChangeEvent, useCallback, useState } from 'react';
import ContainerComponent from '../../components/ContainerComponent';
import { useGetListQuery } from '../../store/services/art';
import BookListComponent from '../../components/BookListComponent';
import { Grid, Pagination } from '@mui/material';
import SearchBarComponent from '../../components/SearchBarComponent';
import { ISearchValues } from '../../models';

interface ISearchParams {
  title: string;
  categories: string[]
}

const HomePage = () => {
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    title: '',
    categories: []
  })
  const [page, setPage] = useState(1)
  const { isLoading, isFetching, data: response } = useGetListQuery({
    page,
    ...searchParams,
  });

  const handleUpdatePage = useCallback((_: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }, []);

  const handleSearch = useCallback((values: ISearchValues) => {
    const categories = values.categories.map((category) => category.title)
    setSearchParams({
      title: values.title,
      categories: categories
    })
  }, []);


  return (
    <ContainerComponent>
      <>
        <Grid container alignItems="stretch">
          <SearchBarComponent handleSearch={handleSearch} />
          <BookListComponent list={response?.data} loading={isLoading || isFetching} />
          <Grid
            item
            xs={12}
            sx={{
              paddingTop: 6,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Pagination count={response?.pagination?.total_pages} onChange={handleUpdatePage} />
          </Grid>
        </Grid>
      </>
    </ContainerComponent>
  );
};

export default React.memo(HomePage);
