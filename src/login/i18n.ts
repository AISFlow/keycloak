/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/i18n.ts" --revert
 */

import { i18nBuilder } from '@keycloakify/login-ui/i18n'
import type { ThemeName } from '../kc.gen'

/** @see: https://docs.keycloakify.dev/features/i18n */
const { I18nProvider, useI18n } = i18nBuilder
	.withThemeName<ThemeName>()
	.withExtraLanguages({
		ko: {
			label: '한국어',
			getMessages: () => import('./i18n.ko')
		}
	})
	.withCustomTranslations({
		en: {
			welcomeMessage:
				'Welcome to Acme inc - Your gateway to seamless planning and organization.',
			loginAccountTitle: 'Login to your account',
			registerTitle: 'Register a new account',
			email: 'Email',
			noAccount: "Don't have an account?",
			doRegister: 'Sign up',
			'organization.selectTitle': 'Choose Your Organization',
			'organization.pickPlaceholder': 'Pick an organization to continue',
			'identity-provider-login-last-used': 'Last used',
			attemptedUsernameLoggingInAs: 'Logging in as'
		},
		ar: {
			welcomeMessage:
				'مرحبًا بك في Acme inc - بوابتك إلى التخطيط والتنظيم السلس.',
			loginAccountTitle: 'تسجيل الدخول  إلى حسابك',
			registerTitle: 'تسجيل حساب جديد',
			email: 'البريد الإلكتروني',
			doRegister: 'إنشاء حساب',
			noAccount: 'ليس لديك حساب؟',
			'organization.selectTitle': 'اختر مؤسستك',
			'organization.pickPlaceholder': 'اختر مؤسسة للمتابعة',
			'identity-provider-login-last-used': 'آخر استخدام',
			attemptedUsernameLoggingInAs: 'تسجيل الدخول كـ'
		},
		fr: {
			welcomeMessage:
				'Bienvenue sur Acme inc Votre passerelle vers une planification et une organisation sans faille.',
			loginAccountTitle: 'Connectez-vous à votre compte',
			registerTitle: 'Créer    un nouveau compte',
			email: 'E-mail',
			doRegister: "S'inscrire",
			noAccount: "Vous n'avez pas de compte?",
			'organization.selectTitle': 'Choisissez Votre Organisation',
			'organization.pickPlaceholder':
				'Sélectionnez une organisation pour continuer',
			'identity-provider-login-last-used': 'Dernière utilisation',
			attemptedUsernameLoggingInAs: 'Se connecter en tant que'
		},
		ko: {
			welcomeMessage:
				'AISFlow 에 오신 것을 환영합니다.',
			loginAccountTitle: '계정에 로그인',
			registerTitle: '회원가입',
			email: '이메일',
			doRegister: '회원가입',
			noAccount: '계정이 없으신가요?',
			'organization.selectTitle': '조직 선택',
			'organization.pickPlaceholder': '계속하려면 조직을 선택하세요',
			'identity-provider-login-last-used': '최근 사용',
			attemptedUsernameLoggingInAs: '다음으로 로그인 중'
		}
	})
	.build()

export { I18nProvider, useI18n }
