import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/common/redux/store'

const useAppDispatch = (): AppDispatch => useDispatch()

export default useAppDispatch
