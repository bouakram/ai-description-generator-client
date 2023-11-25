import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

type ReactQueryProvidersPropsType = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

const ReactQueryProviders = ({ children }: ReactQueryProvidersPropsType) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryProviders