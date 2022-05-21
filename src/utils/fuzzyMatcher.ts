import { escapeRegExp } from 'lodash'

interface ICon2syl {
  ㄱ: number
  ㄲ: number
  ㄴ: number
  ㄷ: number
  ㄸ: number
  ㄹ: number
  ㅁ: number
  ㅂ: number
  ㅃ: number
  ㅅ: number
}

function ch2pattern(ch: string) {
  const offset = 44032
  if (/[가-힣]/.test(ch)) {
    const chCode = ch.charCodeAt(0) - offset
    if (chCode % 28 > 0) {
      return ch
    }
    const begin = Math.floor(chCode / 28) * 28 + offset
    const end = begin + 27
    return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`
  }
  if (/[ㄱ-ㅎ]/.test(ch)) {
    const con2syl = {
      ㄱ: '가'.charCodeAt(0),
      ㄲ: '까'.charCodeAt(0),
      ㄴ: '나'.charCodeAt(0),
      ㄷ: '다'.charCodeAt(0),
      ㄸ: '따'.charCodeAt(0),
      ㄹ: '라'.charCodeAt(0),
      ㅁ: '마'.charCodeAt(0),
      ㅂ: '바'.charCodeAt(0),
      ㅃ: '빠'.charCodeAt(0),
      ㅅ: '사'.charCodeAt(0),
    }
    const begin = ch in con2syl ? con2syl[ch as keyof ICon2syl] : (ch.charCodeAt(0) - 12613) * 588 + con2syl['ㅅ']
    const end = begin + 587
    return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`
  }

  return escapeRegExp(ch)
}

export function createFuzzyMatcher(input: string) {
  const pattern = input
    .split('')
    .map(ch2pattern)
    .map((ch2) => `(${ch2})`)
    .join('.*?')
  return new RegExp(pattern, 'g')
}
