import { ApiError, ApiSuccess, ApiGetMockData, CoffeePageDestroyed, CoffeePageInit } from './actions';
import { RootEffects } from './effects';
import { rootReducer } from './reducer';
import { getStateError, getStateSelectedData } from './selectors';

export const fromRoot = {
  ApiError, ApiSuccess, ApiGetMockData, rootReducer, RootEffects, getStateError, getStateSelectedData, CoffeePageInit, CoffeePageDestroyed
};

