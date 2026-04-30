import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { keycloakify } from 'keycloakify/vite-plugin'
import { buildEmailTheme } from 'keycloakify-emails'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		keycloakify({
			accountThemeImplementation: 'none',
			themeName: 'aisflow',
			postBuild: async (buildContext) => {
				await buildEmailTheme({
					templatesSrcDirPath: path.join(
						buildContext.themeSrcDirPath,
						'email',
						'templates'
					),
					i18nSourceFile: path.join(
						buildContext.themeSrcDirPath,
						'email',
						'i18n.ts'
					),
					themeNames: buildContext.themeNames,
					keycloakifyBuildDirPath: buildContext.keycloakifyBuildDirPath,
					locales: [
						'ar',
						'ca',
						'cs',
						'da',
						'de',
						'el',
						'en',
						'es',
						'fa',
						'fi',
						'fr',
						'hu',
						'it',
						'ja',
						'ka',
						'ko',
						'lt',
						'lv',
						'nl',
						'no',
						'pl',
						'pt',
						'pt-BR',
						'ru',
						'sk',
						'sv',
						'th',
						'tr',
						'uk',
						'zh-CN',
						'zh-TW'
					],
					esbuild: {
						jsx: 'automatic'
					},
					cwd: import.meta.dirname,
					environmentVariables: buildContext.environmentVariables
				})
			}
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
})
