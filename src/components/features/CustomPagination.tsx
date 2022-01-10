import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Option } from 'antd/es/mentions';
import { Pagination, Select } from 'antd';

import fetchQuestions from '../../api/questionsAPI';

import {
  setCurrentPage,
  setFilter,
  setQuestionsPerPage,
} from '../../store/questionsReducer';

import {
  DEFAULT_FILTER,
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
  PAGE_SIZE_OPTIONS,
} from '../../constants';
import { RootState } from '../../store';

function CustomPagination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const questionsNumber = useSelector(
    (state: RootState) => state.questions.data.total,
  );
  const currentPageNumber = useSelector(
    (state: RootState) => state.questions.currentPage,
  );
  const pageSize = useSelector(
    (state: RootState) => state.questions.questionsPerPage,
  );
  const sortValue = useSelector((state: RootState) => state.questions.filter);

  const handleChange = (page: number, pageSize: number, sort?: string) => {
    if (sort) {
      dispatch(setFilter(sort));
    }
    dispatch(setCurrentPage(page));
    dispatch(setQuestionsPerPage(pageSize));
    navigate(`/${page}`);
    dispatch(fetchQuestions(page, pageSize, sort));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination
        style={{ textAlign: 'center' }}
        total={questionsNumber}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        defaultPageSize={DEFAULT_ITEMS_PER_PAGE}
        pageSize={pageSize}
        defaultCurrent={DEFAULT_PAGE}
        onChange={handleChange}
        current={currentPageNumber}
        pageSizeOptions={PAGE_SIZE_OPTIONS}
      />
      <Select
        defaultValue={DEFAULT_FILTER}
        value={sortValue}
        style={{ width: 120, marginLeft: 10 }}
        onChange={(value) => handleChange(1, pageSize, value)}
      >
        <Option value="activity">Activity</Option>
        <Option value="votes">Votes</Option>
        <Option value="creation">Creation</Option>
        <Option value="hot">Hot</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
      </Select>
    </div>
  );
}

export default CustomPagination;
