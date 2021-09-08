import { reduxToolkitRootStore } from './root.store';

//---------------------------------------------------------------------------------------+

export type RootState = ReturnType<typeof reduxToolkitRootStore.getState>;
