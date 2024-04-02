import Calendar from 'react-calendar'
import './BottomSide.css'

const BottomSide = ({openCalendar, closeCalendar}) => {
  return (
    <div className='bottom-side'>
      <div className='bottom-side__inner'>
        <button className='bottom-side__btn bottom-side__btn--calendar' onClick={openCalendar}></button>
        <button className='bottom-side__btn bottom-side__btn--todo' onClick={closeCalendar}></button>
        <button className='bottom-side__btn bottom-side__btn--user'></button>
      </div>
    </div>
  )
}

export default BottomSide