import Storage from '@/services/Storage'

const local = new Storage(typeof window !== 'undefined' ? window.localStorage : undefined)

export default local
