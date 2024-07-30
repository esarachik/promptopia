import '@styles/global.css'
import Nav from "@components/Nav"
import { Suspense } from 'react'
import Provider from "@components/Provider"

export const metadata = {
    title: "Promptopia",
    description: "Discover and share AI Prompts"
}

const Root = ({ children }) => {
    return (
        <html>
            <body suppressHydrationWarning={true}>
                <Provider>                
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        <Suspense>
                            {children}
                        </Suspense>
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default Root