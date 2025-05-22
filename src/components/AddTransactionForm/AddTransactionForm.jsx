import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addTransaction } from '../../redux/transactions/operations';
import { appApi } from '../../redux/api/api';

import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import InputAmount from '../InputAmount/InputAmount';
import InputComment from '../InputComment/InputComment';
import InputDate from '../InputDate/InputDate';
import ToggleDesc from '../ToggleDesc/ToggleDesc';

const AddTransactionForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState('expense');
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const { data } = await appApi.get('/categories');
        setCategories(data.data);
      } catch (error) {
        toast.error('Failed to load categories');
        console.error(error);
      } finally {
        setLoadingCategories(false);
      }
    };

    if (type === 'expense') {
      fetchCategories();
    } else {
      setCategories([]);
    }
  }, [type]);

  const initialValues = {
    type: 'expense',
    category: '',
    amount: '',
    date: new Date(),
    comment: '',
  };

  const validationSchema = Yup.object({
    amount: Yup.number()
      .positive()
      .required(),
    date: Yup.date().required(),
    comment: Yup.string().max(64),
    category: Yup.string().when('type', {
      is: 'expense',
      then: Yup.string().required('Category is required'),
      otherwise: Yup.string(),
    }),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const transactionData = { ...values, type };
      await dispatch(addTransaction(transactionData)).unwrap();
      toast.success('Transaction added successfully');
      resetForm();
      if (onClose) onClose();
    } catch (error) {
      toast.error('Failed to add transaction');
      console.error(error);
    }
  };

  return (
    <div>
      <CloseButton />
      <h3>ModalAddTransaction</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <ToggleDesc type={type} setType={setType} />

            <InputAmount />

            <InputDate />

            {type === 'expense' && (
              <div>
                <label htmlFor="category">Category</label>
                {loadingCategories ? (
                  <p>Loading categories...</p>
                ) : (
                  <Field as="select" name="category">
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category._id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </Field>
                )}
                <ErrorMessage
                  name="category"
                  component="div"
                  className="error"
                />
              </div>
            )}

            <InputComment />

            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
            <CancelButton />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransactionForm;
