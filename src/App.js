import React, { lazy, Suspense } from 'react';
import config from './services/config';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './components/providers/auth.provider';
import CustomRoute from './components/auth/custom.route';

function App() {
	return (
		<AuthProvider>
			<div className={'min-h-screen bg-gray-100'}>
				<Routes>
					{Object.keys(config.routes).map((routeConfig) => {
						const route = config.routes[routeConfig];
						const Component = lazy(() => import(`./pages/${routeConfig}`));

						return (
							<Route
								key={routeConfig}
								path={route.pathname}
								element={
									<CustomRoute isProtected={route.isProtected}>
										<Suspense fallback={<p>Loading...</p>}>
											<Component />
										</Suspense>
									</CustomRoute>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
