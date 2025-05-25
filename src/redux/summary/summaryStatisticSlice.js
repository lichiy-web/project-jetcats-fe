import { createSlice } from '@reduxjs/toolkit';
import { fetchSummary } from './summaryStatisticOperations';

const initialState = {
  isIncome: 'income',
  incomeData: [],
  expenseData: [],
  totalIncome: 0,
  totalExpense: 0,
  period: { year: 2025, month: 5 },
  loading: false,
  error: null,
};

// transform API's data to Chart format
const transformData = categoryObj => {
  return (
    Object.entries(categoryObj)
      // eslint-disable-next-line no-unused-vars
      .filter(([_, value]) => value > 0)
      .map(([category, value]) => ({
        category,
        value,
      }))
  );
};

const summaryStatisticSlice = createSlice({
  name: 'summaryStatistic',
  initialState,
  reducers: {
    setIsIncome: (state, action) => {
      state.isIncome = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchSummary.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.incomeData = transformData(action.payload.income.category);
        state.expenseData = transformData(action.payload.expense.category);
        state.totalIncome = action.payload.income.total;
        state.totalExpense = action.payload.expense.total;
        state.period = action.payload.period;
      })
      .addCase(fetchSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch summary';
      });
  },
});

export const { setIsIncome } = summaryStatisticSlice.actions;
export default summaryStatisticSlice.reducer;
