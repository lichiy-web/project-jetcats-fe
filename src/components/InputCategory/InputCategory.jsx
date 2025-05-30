import { useState } from 'react';
import { ErrorMessage, useFormikContext, useField } from 'formik';
import Select, { components } from 'react-select';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/categories/selectors';
import s from './InputCategory.module.css';

const InputCategory = () => {
  const { values, setFieldValue } = useFormikContext();
  const categories = useSelector(selectCategories);
  const [, meta] = useField('category');
  const [menuOpen, setMenuOpen] = useState(false);

  if (values.type !== 'expense') return null;
  if (!Array.isArray(categories)) return null;

  const categoryExpense = categories.filter(
    category => category.type === 'expense'
  );

  const isError = meta.touched && meta.error;

  const options = [
    { value: '', label: 'Category', isDisabled: true },
    ...categoryExpense.map(category => ({
      value: category._id,
      label: category.name,
    })),
  ];

  const selectedOption =
    options.find(opt => opt.value === values.category) || null;

  const DropdownIndicator = props => (
    <components.DropdownIndicator
      {...props}
      style={{
        display: 'flex',
        alignItems: 'center',

        justifyContent: 'center',
        height: '100%',
        padding: '0 8px',
        boxSizing: 'border-box',
      }}
    >
      <svg width="20" height="20" className={s.icon}>
        <use
          href={`/sprites.svg#${
            menuOpen ? 'arrow-up-icon' : 'arrow-down-icon'
          }`}
        />
      </svg>
    </components.DropdownIndicator>
  );

  const customStyles = {
    control: base => ({
      ...base,
      alignItems: 'center',
      background: 'none',
      border: isError
        ? '1px solid var(--main-red)'
        : '1px solid var(--main-black)',
      height: '44px',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: 'none',
      fontFamily: 'var(--font-family)',
      fontWeight: '500',
      fontSize: '18px',
    }),
    valueContainer: base => ({
      ...base,
      color: isError ? 'var(--main-red)' : 'black',
    }),
    singleValue: base => ({
      ...base,
      color: isError ? 'var(--main-red)' : 'black',
      fontWeight: 500,
    }),
    placeholder: base => ({
      ...base,
      color: isError ? 'var(--main-red)' : 'black',
    }),
    input: base => ({
      ...base,
      color: isError ? 'var(--main-red)' : 'black',
    }),
    menu: base => ({
      ...base,
      borderRadius: '8px',
      background: 'linear-gradient(180deg, #294045 0%, #1e2f33 100%)',
      margin: '0',
      zIndex: 100,
    }),
    menuList: base => ({
      ...base,
      maxHeight: '157px',
      overflowY: 'auto',
    }),
    option: (base, state) => ({
      ...base,
      background: state.isFocused
        ? 'linear-gradient(180deg, #355359 0%, #3b5d63 100%)'
        : 'transparent',
      color: '#fcfcfc',
      cursor: 'pointer',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };

  return (
    <div className={s.wrapper}>
      <Select
        name="category"
        value={selectedOption || null}
        onChange={option => setFieldValue('category', option.value)}
        options={options}
        placeholder="Category"
        classNamePrefix="react-select"
        className={isError ? 'react-select-error' : ''}
        styles={customStyles}
        components={{ DropdownIndicator }}
        onMenuOpen={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
      />
      <ErrorMessage name="category" component="div" className={s.error} />
    </div>
  );
};

export default InputCategory;
