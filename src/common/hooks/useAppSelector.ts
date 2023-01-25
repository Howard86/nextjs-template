import { type TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '@/common/redux/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
