'use strict'


export default class Filter {
  constructor() {
    this.config = {

    }
    this.filter
    this.items
    this.filters
  }

  newSelectors () {
    this.filter = document.querySelector('.archive-filter')
    this.items = document.querySelectorAll('.archive-item')
    this.filters = document.querySelectorAll('button.archive-filter-item')
  }

  filterCategories() {
    console.log('filter!');

    this.filters.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        let current = e.target || e.srcElement
        const currentFilter = current.getAttribute('data-slug')

        if (current.classList.contains('active')) {
          this.removeActiveFilter()
          this.showAllItems()
        } else {
          this.setActiveFilter(current, currentFilter)
          this.filterItems(currentFilter)
        }

      })
    });

  }

  filterItems(slug) {
    this.items.forEach((item, i) => {
      if (item.classList.contains(slug)) {
        item.style.opacity = 1
      } else {
        item.style.opacity = .2
      }
    })
  }

  showAllItems() {
    this.items.forEach((item, i) => {
      item.style.opacity = 1
    })
  }

  setActiveFilter(current, slug) {
    this.filters.forEach((item, i) => {
      if (item != current) {
        item.classList.remove('active')
      } else {
        item.classList.add('active')
      }
    });
  }

  removeActiveFilter() {
    this.filters.forEach((item, i) => {
      item.classList.remove('active')
    });
  }

  init() {
    this.newSelectors()

    if (this.filter) {
      this.filterCategories()
    }

    document.addEventListener('swup:contentReplaced', (event) => {
      this.newSelectors()
      this.filterCategories()
    });
  }
}
