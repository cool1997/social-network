import React from 'react'
import styles from './Pagination.module.scss'
import cn from 'classnames'


const Pagination = ({pages, currentPage, onPageChanged, portionNumber, setPortionNumber, leftPortionPageNumber, rightPortionPageNumber, portionCount, ...props}) => {
  return (
    <section className={`${styles.Pagination} ${props.className}`}>
      {portionNumber > 1 &&
      <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
      {pages
        .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page) => {
          return (
            <span className={`${styles.page} ${currentPage === page && styles.selected}`} onClick={() => {onPageChanged(page)}} key={page}>{page}</span>
          )
      })}
      {portionCount > portionNumber &&
      <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </section>
  )
}


export default Pagination;