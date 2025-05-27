import DudeHiSvg from '../../assets/DudeHi.svg';
import css from './DudeHi.module.css';

const DudeHi = () => {
  return (
    <div className={css.dudeWrapper}>
      <img
        src={DudeHiSvg}
        alt="Dude Hi"
        className={css.dudeLog}
      />
    </div>
  );
};

export default DudeHi;

// import DudeHiSvg from '../../assets/DudeHi.svg';
// import css from './DudeHi.module.css';

// const DudeHi = ({isMobile = false, isTablet = false}) => {
//   if (isMobile) {
//     return (
//       <div className={css.dudeWrap}>
//         <img
//           src={DudeHiSvg}
//           alt="Dude Hi"
//           className={css.dudeMobile}
//         />
//       </div>
//     );
//   }

//     if (isTablet) {
//     return (
//       <div className={css.dudeWrapper} >
//         <img src={DudeHiSvg} alt="Dude Hi" className={css.dudeTablet} />
//       </div>
//     );
//   }

//   return (
//     <img
//       src={DudeHiSvg}
//       alt="Dude Hi"
//       className={css.dude}
//     />
//   );
// };
// export default DudeHi;

