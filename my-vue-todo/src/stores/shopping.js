import { defineStore } from 'pinia';

export const useShoppingStore = defineStore('shopping', {
  state: () => {
    return {
      // 商品列表
      foodList: [
        { id: 1, name: '洁柔挂抽', price: 30 },
        { id: 2, name: '哈密瓜', price: 25 },
        { id: 3, name: '甘肃花牛苹果', price: 29.05 },
        { id: 4, name: '宝宝辅食碗', price: 14.9 }
      ],
      // 购物车列表
      carList: []
    }
  },
  getters: {
    totalPrice: (state) => {
      return 0
    }
  },
  actions: {
    addShopping(shopping) {
      const index = this.carList.findIndex(car => car.id === shopping.id)
      if (index > -1) {
        this.carList = this.carList.map(car => {
          if (car.id === shopping.id) {
            return {
              ...car,
              count: car.count + 1
            }
          }
          return car
        })
      } else {
        this.carList.push({
          ...shopping,
          count: 1
        })
      }
    },
    // 增加/减少
    decreaseShopping(id) {
      this.carList = this.carList.map(car => {
        if (car.id === id) {
          const count = car.count - 1
          return {
            ...car,
            count
          }
        }
        return car
      })
    }
  }
})