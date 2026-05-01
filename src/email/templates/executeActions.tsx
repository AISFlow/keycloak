import i18n, { type TFunction } from 'i18next'
import { Button, Raw, render, Text } from 'jsx-email'
import type {
	GetSubject,
	GetTemplate,
	GetTemplateProps
} from 'keycloakify-emails'
import { createVariablesHelper } from 'keycloakify-emails/variables'
import { btnTextColor, primaryColor } from '../constants'
import { EmailLayout } from '../layout'
import { previewLocale } from '../utils/previewLocale'
import { applyRTL } from '../utils/RTL'

type TemplateProps = Omit<GetTemplateProps, 'plainText'> & { t: TFunction }

const paragraph = {
	lineHeight: 1.5,
	fontSize: 14,
	textAlign: 'left' as const
}

const rtlStyle = {
	direction: 'rtl' as const,
	textAlign: 'right' as const
}

export const previewProps: TemplateProps = {
	t: i18n.getFixedT(previewLocale),
	locale: previewLocale,
	themeName: 'vanilla'
}

export const templateName = 'ExecuteActions'

const { exp } = createVariablesHelper('executeActions.ftl')

export const Template = ({
	locale = previewProps.locale,
	t = previewProps.t
}: TemplateProps = previewProps) => {
	// 💡 빌드 에러 방지를 위해 = previewProps 추가
	const isRTL = locale === 'ar'

	return (
		<EmailLayout preview={t('executeActions.subject')} locale={locale}>
			<Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
				{/* 1. FreeMarker 변수 할당 (출력은 안 됨) */}
				<Raw content="<#assign requiredActionsText><#if requiredActions??><#list requiredActions><#items as reqActionItem>${msg('requiredAction.${reqActionItem}')}<#sep>, </#sep></#items></#list></#if></#assign>" />

				{/* 2. 안내 메시지 (예: 관리자가 정보 업데이트를 요청했습니다. 다음 작업을 완료해 주세요.) */}
				{t('executeActions.message', { realmName: exp('realmName') })}

				{/* 3. 할당해 둔 작업 목록 변수 출력 */}
				<Raw content=' ${requiredActionsText}' />
			</Text>

			<Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
				{t('executeActions.clickLink')}
			</Text>

			<Button
				width={200}
				height={40}
				backgroundColor={primaryColor}
				textColor={btnTextColor}
				align={isRTL ? 'right' : 'left'}
				borderRadius={3}
				fontSize={15}
				href={exp('link')}
			>
				{t('executeActions.updateAccountButton')}
			</Button>

			<Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
				{t('executeActions.linkExpiration', {
					expiration: exp('linkExpirationFormatter(linkExpiration)')
				})}
			</Text>

			<Text style={applyRTL(paragraph, isRTL, rtlStyle)}>
				{t('executeActions.ignoreMessage')}
			</Text>
		</EmailLayout>
	)
}

export const getTemplate: GetTemplate = async (props) => {
	const t = i18n.getFixedT(props.locale)
	return await render(<Template {...props} t={t} />, {
		plainText: props.plainText
	})
}

export const getSubject: GetSubject = async (props) => {
	const t = i18n.getFixedT(props.locale)
	return t('executeActions.subject')
}
