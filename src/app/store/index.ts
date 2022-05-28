import { ApiError, ApiSuccess, ApiGetMockData, ApiGetMockDataWithError } from './actions';
import { RootEffects } from './effects';
import { rootReducer, RootState } from './reducer';
import { getStateError, getStateSelectedData } from './selectors';

export const fromRoot = {
  ApiError, ApiSuccess, ApiGetMockData, rootReducer, RootEffects, ApiGetMockDataWithError, getStateError, getStateSelectedData,
};

