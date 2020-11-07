import React from 'react'
import { View, Image } from '@tarojs/components'

import List from './components/list'

import styles from './index.module.scss'

export default () => {
  return (
    <View className={styles.index}>
      
      <List />
    </View>
  )
}