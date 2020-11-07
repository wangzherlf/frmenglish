import React from 'react'
import { View, Image } from '@tarojs/components'

import img_thumb from '@/assets/thumb.png'
import img_like from '@/assets/heart_on.png'

import styles from './index.module.scss'

export default () => {
  return (
    <View className={styles.list}>
      {
        Array(10).fill(1).map((_item, index) => {
          return (
            <View key={`list-${index}`} className={styles.item}>
              <View className={styles.details}>
                <View className={styles.meta}>掘金 · 1天前 · JavaScript</View>
                <View className={styles.title}>一句有趣的JS代码一句有趣的JS趣的JS代码一句有趣的JS代码一句有趣的JS代码一句有趣的JS趣的JS代码一句有趣的JS代码</View>
                <View className={styles.action}>
                  <View className={styles.action__padding}>
                    <Image src={img_like} mode="scaleToFill" className={styles.like} />
                  </View>
                  <View className={styles.action__padding}>
                    <Image src={img_like} mode="scaleToFill" className={styles.view} />
                  </View>
                </View>
              </View>
              
              <Image className={styles.thumb} src={img_thumb} mode="scaleToFill"/>
            </View>
          )
        })
      }
    </View>
  )
}