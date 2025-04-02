FROM quay.io/keycloak/keycloak:26.0.7

ADD --link --chown=1000:1000 https://github.com/NavyStack/tailcloakify/releases/download/v2.0.2/keycloak-theme-for-kc-all-other-versions.jar /opt/keycloak/providers/keycloak-theme.jar