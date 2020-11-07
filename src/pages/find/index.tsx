import React, { useEffect, useState } from 'react'
import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'

import styles from './index.module.scss'
import wordsList from '@/constants/words'

const langArr = [{
  key: 'en',
  title: 'English',
}, {
  key: 'zh',
  title: '中文'
}]
const shuffle = (arr) => {
  let len = arr.length, i

  while(len) {
    i = (Math.random() * len--) >>> 0;
    [arr[len], arr[i]] = [arr[i], arr[len]]
  }
  return arr
}
const isH5 = process.env.TARO_ENV === 'h5'
export default () => {
  const [index, setIndex] = useState(0)
  const [words] = useState(() => shuffle(wordsList))
  const [isNext, setIsNext] = useState(true)
  const [lang, setLang] = useState('en')
  const [isShowIPA, setIsShowIPA] = useState(false)
  const [isShowSubtitle, setIsShowSubtitle] = useState(false)
  const handlerToggleTag = (key) => {
    setLang(key)
  }

  const handlerShowIPA = () => {
    setIsShowIPA(true)
  }

  const handlerShowSubtitle = () => {
    setIsShowSubtitle(true)
  }
  
  const handlerToggleWords = () => {
    if (isNext) {
      // 下一页
      if (index + 1 >=  words.length) {
        setIsNext(false)
      } else {
        setIndex(index + 1)
      }
    } else {
      // 上一页
      if (index - 1 < 0) {
        setIsNext(true)
      } else {
        setIndex(index - 1)
      }
    }
  }

  useEffect(() => {
    setIsShowIPA(false)
    setIsShowSubtitle(false)
  }, [index])

  const [style] = useState(() => {
    if (isH5) {
      return { 
        box: {height: window.innerHeight + 'px'},
        footer: { bottom: 50 + 'px'}
      }
    }
    return {
      box: '',
      footer: ''
    }
  })

  return (
    <View className={styles.box} style={style.box}>
      <View className={styles.tags}>
        {
          langArr.map((item, index) => <View key={`lang-${index}`} className={lang === item.key ? `${styles.tag} ${styles.active}` : `${styles.tag}`} onClick={() => handlerToggleTag(item.key)}>{item.title}</View>)
        }
      </View>
      <View className={styles.article}>
        <View className={styles.title} onClick={handlerShowIPA}>
          { lang == 'en' ? words[index].en : words[index].zh }
        </View>
        <View className={styles.ipa} onClick={handlerShowSubtitle}>
          {isShowIPA ? words[index].ipa : null}
        </View>
        <View className={styles.subtitle}>
          {isShowSubtitle ? (lang == 'en' ? words[index].zh : words[index].en) : null}
        </View>
      </View>
      <View className={styles.footer} style={style.footer}>
        <Button className={isNext ? `${styles.btn} ${styles.next}` : `${styles.btn} ${styles.prev}`} onClick={handlerToggleWords}>{isNext ? '下一个' : '上一个'}</Button>
      </View>
    </View>
  )
}