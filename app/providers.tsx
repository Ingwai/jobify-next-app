'use client';
import { ThemeProvider } from '@/components/theme-provider';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@/components/ui/toaster';

const Providers = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(() => {
		return new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: 60 * 1000 * 5,
					// With SSR, we usually want to set some default staleTime
					// above 0 to avoid refetching immediately on the client
				},
			},
		});
	});

	return (
		<>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
				<Toaster />
				<QueryClientProvider client={queryClient}>
					{children}
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
};
export default Providers;