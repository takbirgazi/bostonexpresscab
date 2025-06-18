"use client"
import { store } from '@/lib/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate
                loading={
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        fontSize: '1.5rem',
                        color: '#555'
                    }}>
                        Loading...
                    </div>
                }
                persistor={persistor}
            >
                {children}
            </PersistGate>
        </Provider>
    )
}