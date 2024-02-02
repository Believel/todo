import { defineStore } from 'pinia';

export const useShoppingStore = defineStore('shopping', {
  state: () => {
    return {
      // 商品列表
      foodList: [
        { id: 1, title: '洁柔挂抽', price: 30 },
        { id: 2, title: '哈密瓜', price: 25 },
        { id: 3, title: '甘肃花牛苹果', price: 29.05 },
        { id: 4, title: '宝宝辅食碗', price: 14.9 }
      ],
      // 购物车列表
      carList: [
        // {
        //   id: 1,
        //   quantity: 1
        // }
      ]
    }
  },
  getters: {
    // 总价
    totalPrice: (state) => {
      return state.carList.reduce((sum, next) => {
        const food = state.foodList.find(food => food.id === next.id)
        return sum + next.quantity * food.price
      }, 0).toFixed(2)
    },
    carFoodList: (state) => {
      return state.carList.map(car => {
        const food = state.foodList.find(food => food.id === car.id)
        if (food) {
          return {
            ...food,
            ...car
          }
        }
        return car
      })
    }
  },
  actions: {
    addShopping(id) {
      const index = this.carList.findIndex(car => car.id === id)
      if (index > -1) {
        this.carList = this.carList.map(car => {
          if (car.id === id) {
            return {
              ...car,
              quantity: car.quantity + 1
            }
          }
          return car
        })
      } else {
        this.carList.push({
          id,
          quantity: 1
        })
      }
    },
    // 增加/减少
    decreaseShopping(id) {
      this.carList = this.carList.map(car => {
        if (car.id === id) {
          const quantity = car.quantity - 1
          return {
            ...car,
            quantity
          }
        }
        return car
      })
    }
  }
})