import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  API_GET_MOCK_DATA = '[Coffee Page] Get API Data',
  API_ERROR_ACTION = '[Coffee Page] Get API Error',
  API_SUCCESS_ACTION = '[Coffee Page] Get API Success',
  COFFEE_PAGE_INITIALIZED = '[Coffee Page] Initialized',
  COFFEE_PAGE_DESTROYED = '[Coffee Page] Destroyeds',
}

// this will be dispatched from some component or service
export const ApiGetMockData = createAction(ActionTypes.API_GET_MOCK_DATA);
export const ApiError = createAction(ActionTypes.API_ERROR_ACTION, props<{ error: any }>());
export const ApiSuccess = createAction(ActionTypes.API_SUCCESS_ACTION, props<{ data: any }>());

export const CoffeePageInit = createAction(ActionTypes.COFFEE_PAGE_INITIALIZED);
export const CoffeePageDestroyed = createAction(ActionTypes.COFFEE_PAGE_DESTROYED);
