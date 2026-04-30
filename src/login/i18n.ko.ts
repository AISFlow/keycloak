import type { MessageKey_defaultSet } from 'keycloakify/login'

const messages: Record<MessageKey_defaultSet, string> = {
	doLogIn: '로그인',
	doRegister: '회원가입',
	doRegisterSecurityKey: '보안 키 등록',
	doCancel: '취소',
	doSubmit: '확인',
	doBack: '뒤로',
	doYes: '예',
	doNo: '아니요',
	doContinue: '계속',
	doIgnore: '무시',
	doAccept: '동의',
	doDecline: '거부',
	doForgotPassword: '비밀번호 찾기',
	doClickHere: '여기를 클릭하세요',
	doImpersonate: '다른 사용자로 로그인',
	doTryAgain: '다시 시도',
	doTryAnotherWay: '다른 방법으로 시도',
	doConfirmDelete: '삭제 확인',
	doLogout: '로그아웃',
	doX509Login: '인증서 로그인',

	errorDeletingAccount: '계정 삭제 중 오류가 발생했습니다',
	deletingAccountForbidden:
		'이 계정은 삭제할 수 없습니다. 관리자에게 문의하세요.',

	kerberosNotConfigured: 'Kerberos가 설정되지 않았습니다',
	kerberosNotConfiguredTitle: 'Kerberos 미설정',
	bypassKerberosDetail:
		'브라우저가 Kerberos 인증에 적합하게 설정되지 않았거나 Kerberos 인증을 사용 중이 아닙니다. 다른 방법으로 로그인해 주세요.',
	kerberosNotSetUp:
		'Kerberos가 구성되지 않았습니다. 다른 방법으로 로그인해 주세요.',

	registerTitle: '회원가입',
	loginAccountTitle: '계정에 로그인',
	loginTitle: '{0} 로그인',
	loginTitleHtml: '{0}',
	impersonateTitle: '{0} 다른 사용자로 로그인',
	impersonateTitleHtml: '<strong>{0}</strong> 다른 사용자로 로그인',

	realmChoice: '영역 선택',
	unknownUser: '알 수 없는 사용자',

	loginTotpTitle: '이중 인증 설정',
	loginProfileTitle: '계정 정보 업데이트',
	loginIdpReviewProfileTitle: '계정 정보 확인',
	loginTimeout: '로그인 시간이 초과되었습니다. 처음부터 다시 시도해 주세요.',
	reauthenticate: '재인증이 필요합니다. 비밀번호를 입력해 주세요.',
	authenticateStrong: '보안 인증을 진행해 주세요.',

	oauthGrantTitle: '권한 부여',
	oauthGrantTitleHtml: '권한 부여',
	oauthGrantInformation: '다음 권한을 부여하시겠습니까?',
	oauthGrantReview: '다음 권한을 검토해 주세요:',
	oauthGrantTos: '서비스 이용 약관에 동의합니다.',
	oauthGrantPolicy: '개인정보 처리방침에 동의합니다.',

	errorTitle: '오류가 발생했습니다',
	errorTitleHtml: '<strong>오류가 발생했습니다</strong>',

	emailVerifyTitle: '이메일 인증',
	emailForgotTitle: '비밀번호 재설정',
	updateEmailTitle: '이메일 업데이트',
	emailUpdateConfirmationSentTitle: '확인 이메일을 보냈습니다',
	emailUpdateConfirmationSent:
		'{0} 주소로 확인 이메일을 보냈습니다. 메일에 포함된 링크를 클릭해 이메일 변경을 완료해 주세요.',
	emailUpdatedTitle: '이메일이 업데이트되었습니다',
	emailUpdated: '계정 이메일이 {0}(으)로 변경되었습니다.',

	updatePasswordTitle: '비밀번호 변경',

	codeSuccessTitle: '성공 코드',
	codeErrorTitle: '오류 코드: {0}',

	displayUnsupported: '지원되지 않는 디스플레이 형식입니다',
	browserRequired: '이 인증을 진행하려면 브라우저가 필요합니다',
	browserContinue: '이 인증을 진행하려면 브라우저에서 계속해 주세요',
	browserContinuePrompt: '브라우저에서 계속하시겠습니까? [y/n]:',
	browserContinueAnswer: 'y',

	usb: 'USB',
	nfc: 'NFC',
	bluetooth: 'Bluetooth',
	internal: '내장',
	unknown: '알 수 없음',

	termsTitle: '이용약관',
	termsText: '//서비스 이용약관//',
	termsPlainText: '//서비스 이용약관 (텍스트)//',
	termsAcceptanceRequired: '이용약관에 동의해야 합니다.',
	acceptTerms: '이용약관에 동의합니다.',

	deleteCredentialTitle: '{0} 삭제',
	deleteCredentialMessage:
		'다음 인증 수단을 삭제하시겠습니까?\n\n<strong>{0}</strong>',

	recaptchaFailed: 'reCAPTCHA가 올바르지 않습니다',
	recaptchaNotConfigured: 'reCAPTCHA가 필요하지만 설정되지 않았습니다',
	consentDenied: '동의가 거부되었습니다.',

	noAccount: '신규 사용자이신가요?',

	username: '아이디',
	usernameOrEmail: '아이디 또는 이메일',
	firstName: '이름',
	givenName: '이름',
	fullName: '성명',
	lastName: '성',
	familyName: '성',
	email: '이메일',
	password: '비밀번호',
	passwordConfirm: '비밀번호 확인',
	passwordNew: '새 비밀번호',
	passwordNewConfirm: '새 비밀번호 확인',
	hidePassword: '비밀번호 숨기기',
	showPassword: '비밀번호 표시',
	rememberMe: '로그인 상태 유지',

	authenticatorCode: '일회용 비밀번호',

	address: '주소',
	street: '도로명 주소',
	locality: '시/구/군',
	region: '도/시',
	postal_code: '우편번호',
	country: '국가',
	emailVerified: '이메일 인증 완료',
	website: '웹사이트',
	phoneNumber: '전화번호',
	phoneNumberVerified: '전화번호 인증 완료',
	gender: '성별',
	birthday: '생년월일',
	zoneinfo: '시간대',
	gssDelegationCredential: 'GSS 위임 자격증명',

	logoutOtherSessions: '다른 모든 세션에서 로그아웃',

	profileScopeConsentText: '사용자 프로필',
	emailScopeConsentText: '이메일 주소',
	addressScopeConsentText: '주소',
	phoneScopeConsentText: '전화번호',
	offlineAccessScopeConsentText: '오프라인 액세스',
	samlRoleListScopeConsentText: '내 역할',
	rolesScopeConsentText: '사용자 역할',
	organizationScopeConsentText: '조직',

	restartLoginTooltip: '처음부터 다시 시작',

	loginTotpIntro:
		'다음 인증 앱 중 하나를 설치하여 일회용 비밀번호를 생성해야 합니다.',
	loginTotpStep1: '휴대전화에 다음 앱 중 하나를 설치하세요.',
	loginTotpStep2: '앱을 열어 QR 코드를 스캔하세요.',
	loginTotpStep3:
		'앱에 표시된 일회용 비밀번호를 입력하고 변경 사항을 저장하려면 아래 버튼을 눌러 설정을 완료하세요.',
	loginTotpStep3DeviceName:
		'여러 OTP 기기를 구분할 수 있도록 기기 이름을 지정하세요.',
	loginTotpManualStep2: '앱에서 다음 키를 입력하세요:',
	loginTotpManualStep3: '기본값과 다른 경우 다음 값을 사용해 앱을 구성하세요:',
	loginTotpUnableToScan: 'QR 코드를 스캔할 수 없나요?',
	loginTotpScanBarcode: '바코드 스캔하기',
	loginCredential: '자격 증명',
	loginOtpOneTime: '일회용 비밀번호',
	loginTotpType: '유형',
	loginTotpAlgorithm: '알고리즘',
	loginTotpDigits: '자리수',
	loginTotpInterval: '주기',
	loginTotpCounter: '카운터',
	loginTotpDeviceName: '기기 이름',
	'loginTotp.totp': '시간 기반',
	'loginTotp.hotp': '카운터 기반',

	totpAppFreeOTPName: 'FreeOTP',
	totpAppGoogleName: 'Google Authenticator',
	totpAppMicrosoftAuthenticatorName: 'Microsoft Authenticator',

	loginChooseAuthenticator: '로그인 방법 선택',

	oauthGrantRequest: '이 권한을 부여하시겠습니까?',
	inResource: '위치:',

	oauth2DeviceVerificationTitle: '기기 로그인',
	verifyOAuth2DeviceUserCode: '코드를 입력하고 제출 버튼을 눌러주세요.',
	oauth2DeviceInvalidUserCodeMessage:
		'코드가 올바르지 않습니다. 코드를 다시 확인해 주세요.',
	oauth2DeviceExpiredUserCodeMessage:
		'코드가 만료되었습니다. 기기에서 다시 시도해 로그인해 주세요.',
	oauth2DeviceVerificationCompleteHeader: '기기 로그인 성공',
	oauth2DeviceVerificationCompleteMessage:
		'기기 로그인이 성공적으로 완료되었습니다. 이 브라우저 창을 닫으셔도 됩니다.',
	oauth2DeviceVerificationFailedHeader: '기기 로그인 실패',
	oauth2DeviceVerificationFailedMessage:
		'기기 로그인이 실패했습니다. 다시 로그인해 주세요.',
	oauth2DeviceConsentDeniedMessage: '기기 로그인 권한 부여가 거부되었습니다.',
	oauth2DeviceAuthorizationGrantDisabledMessage:
		'이 클라이언트는 OAuth 2.0 기기 권한 부여 흐름을 시작할 수 없습니다. 흐름이 클라이언트에 대해 비활성화되어 있습니다.',

	emailVerifyInstruction1: '{0} 주소로 인증 메일을 보냈습니다.',
	emailVerifyInstruction2:
		'인증을 완료하려면 메일에 포함된 링크를 클릭해 주세요.',
	emailVerifyInstruction3: '이메일을 받지 못하셨나요?',

	emailLinkIdpTitle: '{0} 연결',
	emailLinkIdp1:
		'{1} 계정 <strong>{2}</strong>를 {3} 계정 <strong>{4}</strong>와 연결하기 위해 {0} 주소로 메일을 보냈습니다.',
	emailLinkIdp2: '받으신 메일의 링크를 클릭해 연결을 진행해 주세요.',
	emailLinkIdp3: '받지 못하셨나요?',
	emailLinkIdp4: '{0}에서 다시 보내려면 클릭하세요.',
	emailLinkIdp5:
		'이미 인증을 완료했다면 {0}에서 <strong>계속</strong>을 눌러 진행하세요.',

	backToLogin: '&laquo; 로그인으로 돌아가기',

	emailInstruction:
		'아이디 또는 이메일을 입력하시면 비밀번호를 재설정할 수 있는 안내 메일을 보내드립니다.',
	emailInstructionUsername:
		'아이디를 입력하시면 비밀번호를 재설정할 수 있는 안내 메일을 보내드립니다.',
	copyCodeInstruction: '다음 코드를 복사한 뒤 인증 앱에 붙여넣어 주세요:',

	pageExpiredTitle: '페이지가 만료되었습니다',
	pageExpiredMsg1: '로그인 절차를 다시 시작하려면 {0}을 클릭하세요.',
	pageExpiredMsg2: '인증을 계속 진행하려면 {0}을 클릭하세요.',

	personalInfo: '개인 정보:',

	role_admin: '관리자',
	'role_realm-admin': '영역 관리자',
	'role_create-realm': '영역 생성',
	'role_create-client': '클라이언트 생성',
	'role_view-realm': '영역 보기',
	'role_view-users': '사용자 보기',
	'role_view-applications': '애플리케이션 보기',
	'role_view-clients': '클라이언트 보기',
	'role_view-events': '이벤트 보기',
	'role_view-identity-providers': 'ID 제공자 보기',
	'role_manage-realm': '영역 관리',
	'role_manage-users': '사용자 관리',
	'role_manage-applications': '애플리케이션 관리',
	'role_manage-identity-providers': 'ID 제공자 관리',
	'role_manage-clients': '클라이언트 관리',
	'role_manage-events': '이벤트 관리',
	'role_view-profile': '프로필 보기',
	'role_manage-account': '계정 관리',
	'role_manage-account-links': '계정 연결 관리',
	'role_read-token': '토큰 읽기',
	'role_offline-access': '오프라인 액세스',

	client_account: '계정',
	'client_account-console': '계정 콘솔',
	'client_security-admin-console': '관리자 콘솔',
	'client_admin-cli': '관리자 CLI',
	'client_realm-management': '영역 관리',
	client_broker: '브로커',

	requiredFields: '필수 입력 항목',

	invalidUserMessage: '아이디 또는 비밀번호가 올바르지 않습니다.',
	invalidUsernameMessage: '아이디가 올바르지 않습니다.',
	invalidUsernameOrEmailMessage: '아이디 또는 이메일이 올바르지 않습니다.',
	invalidPasswordMessage: '비밀번호가 올바르지 않습니다.',
	invalidEmailMessage: '이메일 주소가 올바르지 않습니다.',
	accountDisabledMessage: '계정이 비활성화되었습니다. 관리자에게 문의하세요.',
	accountTemporarilyDisabledMessage:
		'계정이 일시적으로 비활성화되었습니다. 관리자에게 문의하거나 잠시 후 다시 시도해 주세요.',
	expiredCodeMessage:
		'로그인 시간이 초과되었습니다. 처음부터 다시 시도해 주세요.',
	expiredActionMessage:
		'작업 시간이 초과되었습니다. 처음부터 다시 시작해 주세요.',
	expiredActionTokenNoSessionMessage: '작업이 만료되었습니다.',
	expiredActionTokenSessionExistsMessage:
		'작업이 만료되었습니다. 처음부터 다시 시작해 주세요.',
	sessionLimitExceeded: '세션 수가 한도를 초과했습니다.',
	identityProviderLogoutFailure: '외부 ID 제공자 로그아웃에 실패했습니다.',

	missingFirstNameMessage: '이름을 입력해 주세요.',
	missingLastNameMessage: '성을 입력해 주세요.',
	missingEmailMessage: '이메일을 입력해 주세요.',
	missingUsernameMessage: '아이디를 입력해 주세요.',
	missingPasswordMessage: '비밀번호를 입력해 주세요.',
	missingTotpMessage: '인증 코드를 입력해 주세요.',
	missingTotpDeviceNameMessage: '기기 이름을 입력해 주세요.',
	notMatchPasswordMessage: '비밀번호가 일치하지 않습니다.',

	'error-invalid-value': '값이 올바르지 않습니다.',
	'error-invalid-blank': '필수 항목입니다.',
	'error-empty': '필수 항목입니다.',
	'error-invalid-length': '길이는 {1}자에서 {2}자 사이여야 합니다.',
	'error-invalid-length-too-short': '최소 {1}자 이상이어야 합니다.',
	'error-invalid-length-too-long': '최대 {2}자 이하여야 합니다.',
	'error-invalid-email': '올바른 이메일 형식이 아닙니다.',
	'error-invalid-number': '숫자가 올바르지 않습니다.',
	'error-number-out-of-range': '{1} 이상 {2} 이하의 숫자여야 합니다.',
	'error-number-out-of-range-too-small': '{1} 이상의 숫자여야 합니다.',
	'error-number-out-of-range-too-big': '{2} 이하의 숫자여야 합니다.',
	'error-pattern-no-match': '값이 올바르지 않습니다.',
	'error-invalid-uri': 'URL이 올바르지 않습니다.',
	'error-invalid-uri-scheme': 'URL 스킴이 올바르지 않습니다.',
	'error-invalid-uri-fragment': 'URL 프래그먼트가 올바르지 않습니다.',
	'error-user-attribute-required': '필수 항목입니다.',
	'error-invalid-date': '날짜 형식이 올바르지 않습니다.',
	'error-user-attribute-read-only': '이 항목은 변경할 수 없습니다.',
	'error-username-invalid-character':
		'아이디에 사용할 수 없는 문자가 포함되어 있습니다.',
	'error-person-name-invalid-character':
		'이름에 사용할 수 없는 문자가 포함되어 있습니다.',
	'error-reset-otp-missing-id': 'OTP 자격증명 ID가 누락되었습니다.',

	invalidPasswordExistingMessage: '현재 비밀번호가 올바르지 않습니다.',
	invalidPasswordBlacklistedMessage: '사용할 수 없는 비밀번호입니다.',
	invalidPasswordConfirmMessage: '비밀번호가 일치하지 않습니다.',
	invalidTotpMessage: '인증 코드가 올바르지 않습니다.',

	usernameExistsMessage: '이미 사용 중인 아이디입니다.',
	emailExistsMessage: '이미 사용 중인 이메일입니다.',

	federatedIdentityExistsMessage:
		'{0} 값이 {1}인 사용자가 이미 존재합니다. 계정을 연결하려면 다시 로그인하거나 다른 계정으로 로그인해 주세요.',
	federatedIdentityUnavailableMessage:
		'사용자 {0}는 더 이상 사용할 수 없습니다. 관리자에게 문의해 주세요.',
	federatedIdentityUnmatchedEssentialClaimMessage:
		'외부 ID 제공자의 토큰이 필수 클레임 조건을 충족하지 않습니다. 관리자에게 문의해 주세요.',

	confirmLinkIdpTitle: '기존 계정 확인',
	confirmOverrideIdpTitle: '{0} 계정과 다시 연결하시겠습니까?',
	federatedIdentityConfirmLinkMessage:
		'{0} 유형의 사용자 {1}이(가) 이미 존재합니다. 어떻게 진행할까요?',
	federatedIdentityConfirmOverrideMessage:
		'{0} 유형의 다른 사용자 {1}와(과) 이미 연결되어 있습니다. 다시 연결하시겠습니까?',
	federatedIdentityConfirmReauthenticateMessage:
		'{0} 계정에 다시 연결하기 위해 인증해 주세요.',
	nestedFirstBrokerFlowMessage:
		'{0} 사용자 {1}을(를) 자동으로 연결할 수 없습니다. 다른 {2} 계정이 이미 연결되어 있습니다.',
	confirmLinkIdpReviewProfile: '프로필 정보 확인',
	confirmLinkIdpContinue: '기존 계정에 연결',
	confirmOverrideIdpContinue: '기존 계정과의 연결을 끊고 다시 연결',

	configureTotpMessage: '이중 인증을 설정해 계정에 활성화해야 합니다.',
	configureBackupCodesMessage: '복구 코드를 설정해 계정에 활성화해야 합니다.',
	updateProfileMessage: '사용자 프로필 정보를 업데이트해야 합니다.',
	updatePasswordMessage: '비밀번호를 변경해야 합니다.',
	updateEmailMessage: '이메일을 변경해야 합니다.',
	resetPasswordMessage: '비밀번호를 변경해야 합니다.',
	verifyEmailMessage: '이메일 주소를 인증해야 계정을 활성화할 수 있습니다.',
	linkIdpMessage: '{0} 계정과 연결하려면 이메일 주소를 인증해 주세요.',

	emailSentMessage:
		'이메일을 곧 받으실 수 있습니다. 도착하지 않을 경우 다시 시도해 주세요.',
	emailSendErrorMessage:
		'이메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',

	accountUpdatedMessage: '계정 정보가 업데이트되었습니다.',
	accountPasswordUpdatedMessage: '비밀번호가 변경되었습니다.',

	delegationCompleteHeader: '로그인 완료',
	delegationCompleteMessage: '콘솔 애플리케이션으로 돌아가셔도 됩니다.',
	delegationFailedHeader: '로그인 실패',
	delegationFailedMessage: '콘솔 애플리케이션으로 돌아가 다시 로그인해 주세요.',

	noAccessMessage: '접근 권한이 없습니다',

	invalidPasswordMinLengthMessage: '비밀번호는 최소 {0}자 이상이어야 합니다.',
	invalidPasswordMaxLengthMessage: '비밀번호는 최대 {0}자 이하여야 합니다.',
	invalidPasswordMinDigitsMessage: '숫자를 최소 {0}자 포함해야 합니다.',
	invalidPasswordMinLowerCaseCharsMessage:
		'소문자를 최소 {0}자 포함해야 합니다.',
	invalidPasswordMinUpperCaseCharsMessage:
		'대문자를 최소 {0}자 포함해야 합니다.',
	invalidPasswordMinSpecialCharsMessage:
		'특수문자를 최소 {0}자 포함해야 합니다.',
	invalidPasswordNotUsernameMessage: '비밀번호는 아이디와 같을 수 없습니다.',
	invalidPasswordNotContainsUsernameMessage:
		'비밀번호에 아이디가 포함될 수 없습니다.',
	invalidPasswordNotEmailMessage: '비밀번호는 이메일과 같을 수 없습니다.',
	invalidPasswordRegexPatternMessage:
		'비밀번호가 정규식 조건을 만족하지 않습니다.',
	invalidPasswordHistoryMessage:
		'최근 사용한 {0}개의 비밀번호와 같을 수 없습니다.',
	invalidPasswordGenericMessage: '사용할 수 없는 비밀번호입니다.',

	failedToProcessResponseMessage: '응답을 처리하지 못했습니다.',
	httpsRequiredMessage: 'HTTPS가 필요합니다.',
	realmNotEnabledMessage: '영역이 활성화되지 않았습니다.',
	invalidRequestMessage: '올바르지 않은 요청입니다.',
	successLogout: '성공적으로 로그아웃되었습니다',
	failedLogout: '로그아웃에 실패했습니다',
	unknownLoginRequesterMessage: '알 수 없는 로그인 요청자입니다.',
	loginRequesterNotEnabledMessage: '로그인 요청자가 활성화되지 않았습니다.',
	bearerOnlyMessage:
		'Bearer 전용 애플리케이션은 브라우저로 로그인할 수 없습니다.',
	standardFlowDisabledMessage:
		"이 클라이언트에서는 표준 로그인 흐름이 비활성화되어 있습니다. 'response_type' 매개변수를 확인해 주세요.",
	implicitFlowDisabledMessage:
		"이 클라이언트에서는 Implicit 로그인 흐름이 비활성화되어 있습니다. 'response_type' 매개변수를 확인해 주세요.",
	invalidRedirectUriMessage: '리디렉션 URI가 올바르지 않습니다.',
	unsupportedNameIdFormatMessage: '지원하지 않는 NameIDFormat입니다.',
	invalidRequesterMessage: '요청자가 올바르지 않습니다.',
	registrationNotAllowedMessage: '회원가입이 허용되지 않습니다.',
	resetCredentialNotAllowedMessage: '자격증명 재설정이 허용되지 않습니다.',

	permissionNotApprovedMessage: '권한이 승인되지 않았습니다.',
	noRelayStateInResponseMessage:
		'ID 제공자의 응답에 RelayState가 없습니다. 관리자에게 문의해 주세요.',
	insufficientPermissionMessage: 'ID 제공자 연결을 위한 권한이 부족합니다.',
	couldNotProceedWithAuthenticationRequestMessage:
		'ID 제공자로 인증 요청을 진행할 수 없습니다.',
	couldNotObtainTokenMessage: 'ID 제공자로부터 토큰을 받을 수 없습니다.',
	unexpectedErrorRetrievingTokenMessage:
		'ID 제공자로부터 토큰을 받는 중 알 수 없는 오류가 발생했습니다.',
	unexpectedErrorHandlingResponseMessage:
		'ID 제공자의 응답을 처리하는 중 알 수 없는 오류가 발생했습니다.',
	identityProviderAuthenticationFailedMessage: 'ID 제공자 인증에 실패했습니다.',
	couldNotSendAuthenticationRequestMessage:
		'ID 제공자에 인증 요청을 보낼 수 없습니다.',
	unexpectedErrorHandlingRequestMessage:
		'ID 제공자에 대한 요청을 처리하는 중 알 수 없는 오류가 발생했습니다.',

	invalidAccessCodeMessage: '액세스 코드가 올바르지 않습니다.',
	sessionNotActiveMessage: '세션이 활성 상태가 아닙니다.',
	invalidCodeMessage: '처리 중 오류가 발생했습니다. 다시 로그인해 주세요.',
	cookieNotFoundMessage:
		'쿠키를 찾을 수 없습니다. 브라우저에서 쿠키가 활성화되어 있는지 확인해 주세요.',
	insufficientLevelOfAuthentication: '요청한 인증 수준을 만족하지 못했습니다.',

	identityProviderUnexpectedErrorMessage:
		'ID 제공자로 인증하는 중 알 수 없는 오류가 발생했습니다.',
	identityProviderMissingStateMessage:
		'ID 제공자 응답에 state 매개변수가 없습니다.',
	identityProviderMissingCodeOrErrorMessage:
		'ID 제공자 응답에 code나 error 매개변수가 없습니다.',
	identityProviderInvalidResponseMessage:
		'ID 제공자의 응답이 올바르지 않습니다.',
	identityProviderInvalidSignatureMessage:
		'ID 제공자의 서명이 올바르지 않습니다.',
	identityProviderNotFoundMessage: '지정된 ID 제공자를 찾을 수 없습니다.',
	identityProviderLinkSuccess:
		'ID 제공자 {0}을(를) 사용자 {1}와(과) 성공적으로 연결했습니다.',

	staleCodeMessage:
		'이 페이지는 더 이상 유효하지 않습니다. 처음부터 다시 시도해 주세요.',
	realmSupportsNoCredentialsMessage: '사용 가능한 자격증명 유형이 없습니다.',
	credentialSetupRequired: '로그인할 수 없습니다. 자격증명 설정이 필요합니다.',
	identityProviderNotUniqueMessage:
		'여러 ID 제공자를 통해 로그인할 수 있어 어떤 제공자를 사용할지 결정할 수 없습니다.',
	emailVerifiedMessage: '이메일 주소가 인증되었습니다.',
	emailVerifiedAlreadyMessage: '이미 인증된 이메일 주소입니다.',
	staleEmailVerificationLink:
		'이메일 인증 링크가 만료되었거나 이미 사용된 적이 있습니다. 인증 메일을 다시 보내겠습니다.',
	identityProviderAlreadyLinkedMessage:
		'{0}에서 받은 외부 ID는 이미 다른 사용자와 연결되어 있습니다.',
	confirmAccountLinking: '{1} 제공자의 계정 {0}을(를) 내 계정과 연결할까요?',
	confirmEmailAddressVerification: '{0} 이메일 주소를 인증하시겠습니까?',
	confirmExecutionOfActions: '다음 작업을 진행해야 합니다',

	backToApplication: '&laquo; 애플리케이션으로 돌아가기',

	missingParameterMessage: '필수 매개변수가 누락되었습니다: {0}',
	clientNotFoundMessage: '클라이언트를 찾을 수 없습니다.',
	clientDisabledMessage: '클라이언트가 비활성화되어 있습니다.',
	invalidParameterMessage: '매개변수가 올바르지 않습니다: {0}',
	alreadyLoggedIn: '이미 로그인되어 있습니다.',
	differentUserAuthenticated:
		'이미 다른 사용자 {0}로 인증되어 있습니다. 먼저 로그아웃해 주세요.',
	brokerLinkingSessionExpired: '외부 ID 제공자 연결 요청이 유효하지 않습니다.',
	proceedWithAction: '&raquo; 작업을 계속하려면 여기를 클릭하세요.',
	acrNotFulfilled: '인증 요건을 충족하지 못했습니다.',

	'requiredAction.CONFIGURE_TOTP': 'OTP 설정',
	'requiredAction.TERMS_AND_CONDITIONS': '이용 약관',
	'requiredAction.UPDATE_PASSWORD': '비밀번호 변경',
	'requiredAction.UPDATE_PROFILE': '프로필 변경',
	'requiredAction.VERIFY_EMAIL': '이메일 인증',
	'requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES': '복구 인증 코드 생성',
	'requiredAction.webauthn-register-passwordless':
		'Webauthn 비밀번호 없이 등록',

	invalidTokenRequiredActions:
		'요청된 작업이 사용자의 필수 작업과 일치하지 않습니다.',
	clientCertificate: 'X509 클라이언트 인증서:',
	noCertificate: '[인증서 없음]',
	pageNotFound: '페이지를 찾을 수 없습니다',
	internalServerError: '내부 서버 오류가 발생했습니다',

	'console-username': '아이디:',
	'console-password': '비밀번호:',
	'console-otp': '일회용 비밀번호:',
	'console-new-password': '새 비밀번호:',
	'console-confirm-password': '비밀번호 확인:',
	'console-update-password': '비밀번호를 변경해야 합니다.',
	'console-verify-email':
		'이메일 주소 {0}을(를) 인증해야 합니다. 이메일에 포함된 코드를 입력해 주세요.',
	'console-email-code': '이메일 코드:',
	'console-accept-terms': '이용 약관에 동의하시겠습니까? [y/n]:',
	'console-accept': 'y',

	'openshift.scope.user_info': '사용자 정보',
	'openshift.scope.user_check-access': '액세스 정보',
	'openshift.scope.user_full': '전체 액세스',
	'openshift.scope.list-projects': '프로젝트 목록',

	'saml.post-form.title': '인증 진행 중',
	'saml.post-form.message': '잠시만 기다려 주세요.',
	'saml.post-form.js-disabled':
		'JavaScript가 비활성화되어 있습니다. 계속하려면 버튼을 눌러 주세요.',

	'saml.artifactResolutionServiceInvalidResponse':
		'ArtifactResolutionService에서 SAML 아티팩트를 확인할 수 없습니다.',

	'otp-display-name': '인증 앱',
	'otp-help-text': '휴대전화 인증 앱에서 코드를 입력해 로그인하세요.',
	'otp-reset-description': '재설정할 자격증명을 선택하세요.',

	'password-display-name': '비밀번호',
	'password-help-text': '비밀번호를 입력해 로그인하세요.',

	'auth-username-form-display-name': '아이디',
	'auth-username-form-help-text': '아이디를 입력해 로그인을 시작하세요',

	'auth-username-password-form-display-name': '아이디와 비밀번호',
	'auth-username-password-form-help-text':
		'아이디와 비밀번호를 입력해 로그인하세요',

	'auth-x509-client-username-form-display-name': 'X509 인증서',
	'auth-x509-client-username-form-help-text':
		'X509 클라이언트 인증서로 로그인하세요',

	'auth-recovery-authn-code-form-display-name': '복구 인증 코드',
	'auth-recovery-authn-code-form-help-text':
		'이전에 발급된 복구 인증 코드로 로그인하세요.',
	'auth-recovery-code-info-message':
		'코드 목록에서 요청된 복구 인증 코드를 입력하세요.',
	'auth-recovery-code-prompt': '복구 코드 #{0}',
	'auth-recovery-code-header': '복구 인증 코드로 로그인',

	'recovery-codes-error-invalid': '복구 인증 코드가 올바르지 않습니다',

	'recovery-code-config-header': '복구 인증 코드',
	'recovery-code-config-warning-title': '이 복구 코드는 한 번만 표시됩니다.',
	'recovery-code-config-warning-message':
		'잃어버리지 않으려면 인쇄하거나 다운로드 또는 복사해 보관하세요. 그렇지 않으면 새 복구 코드를 생성해야 합니다.',

	'recovery-codes-print': '인쇄',
	'recovery-codes-download': '다운로드',
	'recovery-codes-copy': '복사',
	'recovery-codes-copied': '복사됨',

	'recovery-codes-confirmation-message':
		'복구 코드를 안전한 곳에 보관했습니다.',
	'recovery-codes-action-complete': '완료',
	'recovery-codes-action-cancel': '취소',
	'recovery-codes-download-file-header': '안전한 곳에 보관해 주세요.',
	'recovery-codes-download-file-description':
		'복구 코드는 인증기를 사용할 수 없을 때만 사용해야 합니다.',
	'recovery-codes-download-file-date': '발급 일시:',

	'recovery-codes-label-default': '복구 인증 코드',

	'webauthn-display-name': '보안 키',
	'webauthn-help-text': '보안 키로 로그인하세요.',
	'webauthn-passwordless-display-name': '보안 키',
	'webauthn-passwordless-help-text': '보안 키로 로그인하세요.',
	'webauthn-login-title': '보안 키 로그인',
	'webauthn-registration-title': '보안 키 등록',
	'webauthn-available-authenticators': '사용 가능한 보안 키',
	'webauthn-unsupported-browser-text':
		'이 브라우저는 WebAuthn을 지원하지 않습니다. 다른 브라우저로 로그인하거나 관리자에게 문의해 주세요.',
	'webauthn-doAuthenticate': '보안 키로 로그인',
	'webauthn-createdAt-label': '생성 일시',
	'webauthn-registration-init-label': '보안 키 등록',
	'webauthn-registration-init-label-prompt':
		'보안 키를 등록하려면 등록을 클릭하세요',

	'webauthn-error-title': '보안 키 오류',
	'webauthn-error-registration': '보안 키 등록에 실패했습니다.',
	'webauthn-error-api-get': '보안 키 인증에 실패했습니다.',
	'webauthn-error-different-user':
		'처음 인증된 사용자가 보안 키 인증과 일치하지 않습니다.',
	'webauthn-error-auth-verification': '보안 키 인증 결과가 올바르지 않습니다.',
	'webauthn-error-register-verification':
		'보안 키 등록 결과가 올바르지 않습니다.',
	'webauthn-error-user-not-found':
		'사용자를 찾을 수 없습니다. 인증을 처음부터 다시 시도해 주세요.',

	'passkey-login-title': '패스키 로그인',
	'passkey-available-authenticators': '사용 가능한 패스키',
	'passkey-unsupported-browser-text':
		'이 브라우저는 패스키(WebAuthn)를 지원하지 않습니다. 다른 브라우저로 로그인하거나 관리자에게 문의해 주세요.',
	'passkey-doAuthenticate': '패스키로 로그인',
	'passkey-createdAt-label': '생성 일시',
	'passkey-autofill-select': '패스키로 로그인',

	'identity-provider-redirector': '다른 ID 제공자로 연결',
	'identity-provider-login-label': '다른 방법으로 로그인',

	'idp-email-verification-display-name': '이메일 인증',
	'idp-email-verification-help-text':
		'이메일을 통해 외부 ID 제공자 계정과 다시 연결하세요.',

	'idp-username-password-form-display-name': '아이디와 비밀번호',
	'idp-username-password-form-help-text':
		'아이디와 비밀번호를 입력해 외부 ID 제공자 계정과 다시 연결하세요.',

	finalDeletionConfirmation:
		'계정 삭제는 되돌릴 수 없습니다. 모든 데이터가 영구적으로 사라집니다. 계속하시겠습니까?',
	irreversibleAction: '이 작업은 되돌릴 수 없습니다',
	deleteAccountConfirm: '계정 삭제 확인',
	deletingImplies: '계정을 삭제하면:',
	errasingData: '모든 데이터가 삭제됩니다',
	loggingOutImmediately: '즉시 로그아웃됩니다',
	accountUnusable: '이 애플리케이션에서 계정을 더 이상 사용할 수 없게 됩니다',
	userDeletedSuccessfully: '사용자가 성공적으로 삭제되었습니다',
	'access-denied': '접근이 거부되었습니다',
	'access-denied-when-idp-auth': '{0}에서 접근이 거부되었습니다',

	'frontchannel-logout.title': '다음 애플리케이션에서 로그아웃 중입니다',
	'frontchannel-logout.message':
		'사용 중인 애플리케이션에서 로그아웃 중입니다. 모두 로그아웃될 때까지 잠시 기다려 주세요.',

	logoutConfirmTitle: '로그아웃',
	logoutConfirmHeader: '로그아웃하시겠습니까?',

	readOnlyUsernameMessage: '아이디는 변경할 수 없습니다.',
	'error-invalid-multivalued-size':
		'값의 개수는 {0}개 이상 {1}개 이하여야 합니다.',

	'organization.confirm-membership.title': '조직 가입 확인',
	'organization.confirm-membership': '{0} 조직에 가입하시겠습니까?',
	'organization.member.register.title': '{0} 조직에 등록',

	shouldBeEqual: '{0}은(는) {1}와(과) 같은 값이어야 하지만 {2}입니다',
	shouldBeDifferent: '{0}은(는) {1}와(과) 다른 값이어야 하지만 {2}입니다',
	shouldMatchPattern: '패턴 [{0}]과(와) 일치해야 합니다',
	mustBeAnInteger: '정수여야 합니다',
	notAValidOption: '유효한 선택이 아닙니다',

	selectAnOption: '옵션을 선택하세요',
	remove: '제거',
	addValue: '값 추가',

	languages: '언어',
	'organization.select': '조직 선택',
	linkIdpActionTitle: '{0} 계정 연결',
	linkIdpActionMessage: '{0} 계정과 연결하시겠습니까?'
}

export default messages
