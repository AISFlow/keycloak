import {
	Body,
	Column,
	Container,
	Head,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Text
} from 'jsx-email'
import { createVariablesHelper } from 'keycloakify-emails/variables'
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import { companyLogo, primaryColor } from './constants'
import i18n from './i18n'

// Korean system fonts (`Apple SD Gothic Neo` on Apple, `Malgun Gothic`
// on Windows) come right after `Noto Sans KR` so the email still has
// proper Korean rendering even on clients that strip the external
// `<link rel="stylesheet">` (Gmail, Outlook desktop) — the linked
// `noto-sans-kr@0.1.1/styles.min.css` is best-effort, not load-bearing.
const FONT_STACK =
	'"Noto Sans KR","Apple SD Gothic Neo","Malgun Gothic",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'

const NOTO_SANS_KR_CSS_URL =
	'https://cdn.jsdelivr.net/npm/noto-sans-kr@0.1.1/styles.min.css'

const main: CSSProperties = {
	backgroundColor: '#f6f9fc',
	fontFamily: FONT_STACK,
	wordBreak: 'keep-all',
	overflowWrap: 'break-word'
}

const container: CSSProperties = {
	width: '580px',
	margin: '30px auto',
	backgroundColor: '#ffffff'
}

const content: CSSProperties = {
	padding: '5px 30px 10px 30px',
	lineHeight: '1.6',
	wordBreak: 'keep-all'
}

const logo: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: 30
}

const logoImage: CSSProperties = {
	display: 'block',
	border: '0',
	outline: 'none',
	textDecoration: 'none',
	maxWidth: '100%'
}

const sectionsBorders: CSSProperties = {
	width: '100%',
	display: 'flex'
}
const sectionsBordersBottom: CSSProperties = {
	width: '100%',
	display: 'flex',
	marginBottom: '20px'
}

const sectionBorder: CSSProperties = {
	borderBottom: '1px solid rgb(238,238,238)',
	width: '249px'
}

const sectionCenter: CSSProperties = {
	borderBottom: `1px solid ${primaryColor}`,
	width: '102px'
}

const footer: CSSProperties = {
	width: '580px',
	margin: '0 auto',
	wordBreak: 'keep-all'
}

const currentYear = new Date().getFullYear()

const { exp } = createVariablesHelper('email-test.ftl')

export const EmailLayout = ({
	locale,
	children,
	preview
}: PropsWithChildren<{ preview: ReactNode; locale: string }>) => {
	const t = i18n.getFixedT(locale)

	return (
		<Html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
			<Head>
				{/*
				  Best-effort: many email clients strip <link
				  rel="stylesheet"> (Gmail, Outlook desktop). Clients
				  that DO load it (Apple Mail, Thunderbird, web Gmail
				  preview, …) get Noto Sans KR; everyone else falls
				  back to the system Korean fonts in FONT_STACK.
				*/}
				<link rel='stylesheet' href={NOTO_SANS_KR_CSS_URL} />
			</Head>
			<Preview>{preview}</Preview>
			<Body style={main}>
				<Container style={container}>
					<Section style={logo}>
						<Img
							src={companyLogo}
							width={200}
							height={50}
							alt='Company Name'
							style={logoImage}
						/>
					</Section>

					<Section style={sectionsBorders}>
						<Row>
							<Column style={sectionBorder} />
							<Column style={sectionCenter} />
							<Column style={sectionBorder} />
						</Row>
					</Section>

					<Section style={content}>{children}</Section>

					<Section style={sectionsBordersBottom}>
						<Row>
							<Column style={sectionBorder} />
							<Column style={sectionCenter} />
							<Column style={sectionBorder} />
						</Row>
					</Section>
					<Section style={footer}>
						<Row>
							{}
							<Text
								style={
									{
										textAlign: 'center',
										color: '#706a7b',
										wordBreak: 'keep-all'
									} as CSSProperties
								}
							>
								{t('footer.allRightsReserved', {
									currentYear,
									realmName: exp('realmName')
								})}
							</Text>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	)
}
