"use client"
import { store } from '@/lib/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading="loading..." persistor={persistor} >
                {children}
            </PersistGate>
        </Provider>
    )
}