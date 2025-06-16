// Initialize theme immediately to prevent flash
			(function() {
				// Disable transitions during initial load
				document.documentElement.classList.add('no-transitions');
				
				const storedTheme = localStorage.getItem('theme');
				if (storedTheme) {
					document.documentElement.setAttribute('data-theme', storedTheme);
				}
				
				// Re-enable transitions after a brief delay
				setTimeout(() => {
					document.documentElement.classList.remove('no-transitions');
				}, 100);
			})();
// Dark mode toggle functionality
			(function() {
				const themeToggle = document.getElementById('theme-toggle');
				const html = document.documentElement;
				
				// Get stored theme or default to system preference
				const getStoredTheme = () => localStorage.getItem('theme');
				const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
				
				const setTheme = (theme) => {
					if (theme === 'auto') {
						html.removeAttribute('data-theme');
						localStorage.removeItem('theme');
					} else {
						html.setAttribute('data-theme', theme);
						localStorage.setItem('theme', theme);
					}
				};
				
				const toggleTheme = () => {
					const currentTheme = getStoredTheme();
					const systemTheme = getSystemTheme();
					
					if (!currentTheme) {
						// No stored preference, so toggle opposite of system
						setTheme(systemTheme === 'dark' ? 'light' : 'dark');
					} else if (currentTheme === 'light') {
						setTheme('dark');
					} else {
						setTheme('auto'); // Remove override, go back to system
					}
				};
				
				// Event listeners
				themeToggle?.addEventListener('click', toggleTheme);
				
				// Listen for system theme changes
				window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
					// Only auto-update if user hasn't set a preference
					if (!getStoredTheme()) {
						// Theme will automatically update via CSS
					}
				});
				
			})();