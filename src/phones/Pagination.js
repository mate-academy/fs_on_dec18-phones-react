import React from 'react';

class PhonesPage {
  render() {
    return (
      <div className="Pagination">
        perPage: { perPage }

        <select data-element="per-page-select">
          { [3, 5, 10, 20].map(option => (
          <option
            value={ option }
            { +option === perPage ? 'selected' : '' }
          >
            ${ option }
          </option>
          )) }
          <option></option>
        </select>

        <button data-element="prev-button">
          {'<'}
        </button>

        { this.pages.map(page => (
          <button
            className={ page === currentPage ? 'pagination__page-button--current' : '' }
          >
            { page }
          </button>
        ))}

        <button data-element="next-button"> > </button>
      </div>
    );
  }
}

export default PhonesPage;
