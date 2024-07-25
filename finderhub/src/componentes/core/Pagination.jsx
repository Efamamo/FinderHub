import {Stack, Pagination} from "@mui/material"
import {styled} from '@mui/system'

const CustomPagination = styled(Pagination)({
    '& .MuiPaginationItem-root': {
      width: '20px',
      border: "none",
      boxShadow: "none",
      color: 'black',
      '&.Mui-selected': {
        backgroundColor: 'lightgray',
        color: 'black',
      },
    },
  });

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2}>
      <CustomPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationComponent;
